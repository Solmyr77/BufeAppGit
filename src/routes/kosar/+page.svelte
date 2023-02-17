<script>
   import { slide, fade } from "svelte/transition";
	import { page } from '$app/stores';
   import { goto } from "$app/navigation"
   import { deserialize } from '$app/forms';
   import { cart, total } from "$lib/stores/Cart.js";
   import Topbar from '$lib/components/Topbar.svelte';

   export let data;

   if (localStorage.getItem('CartContent') != null) {
      $cart = JSON.parse(localStorage.getItem('CartContent'));
      $total = JSON.parse(localStorage.getItem('Total'));
   }

   function recalculate() {
      $total = { 'ar': 0, 'darab': 0 };
		Object.keys($cart).forEach(termek => {
			$total.ar += $cart[termek].ar
			$total.darab += $cart[termek].darab
         localStorage.setItem('CartContent', JSON.stringify($cart));
			localStorage.setItem('Total', JSON.stringify($total))
		});
   };

   function urites() {
      localStorage.clear();
      $cart = {};
      $total = { 'ar': 0, 'darab': 0, 'feltet': [] };
   };

   function subtractAmount(termek) {
      if ($cart[termek].darab > 1) {
         let price = $cart[termek].ar / $cart[termek].darab;

         $cart[termek].ar -= price;
         $cart[termek].darab--;
         recalculate();
      } else {
         delete $cart[termek];
         $cart = $cart; // Muszaj reactivity miatt
         recalculate();
         if (Object.keys($cart).length === 0) {
            localStorage.removeItem('CartContent');
            history.back()
         }
      }
   };

   function addAmount(termek) {
      // * Elegge gusztustalan megoldas vegig loopolni es megtalalni a darabszamat a termeknek
      let darab;
      data.termekek.forEach(record => {
         if (record.termek == termek) darab = record.darab
      });

      if ($cart[termek].darab < darab) {
         let price = $cart[termek].ar / $cart[termek].darab;

         $cart[termek].ar += price;
         $cart[termek].darab++;
         recalculate();
      };
   };

   async function handleSubmit(event) {
      const data = new FormData(this);
      const response = await fetch(this.action, {
         method: 'POST',
         body: data
      })

      const result = deserialize(await response.text());

      if (result.type == 'success') {
         urites();
         goto('/rendelesek')
      } else {
			alert(result.data.error);
			delete $cart[result.data.sok];
			$cart = $cart; // kell reactivity miatt
			recalculate();
		}
   }

   let etel = "/images/hambi.jpeg";
	let pizza = "/images/pizza.jpg";
	let melegszendvics = "/images/sajtos-sonkas-melegszendvics.jpg";
	let hotdog = "/images/hotdog.jpeg";
	let pogi = "/images/pogi.jpeg";
	let ital = "/images/cola.jpeg";
	let nasi = "/images/chips.jpeg";
	let egyeb = "/images/zsepi.jpeg";
   let xixo ="/images/xixo.jpeg";

</script>

<main in:fade={{duration: 180}}>
   <div class="flex flex-col justify-between h-screen">
      <div>
         <div class="topRow">
            <div class="flex flex-row items-center">
               <a href="/"><i class="fa-solid fa-caret-left fa-3x text-red-1 ml-4"></i></a>
               <h1 class="text-red-1 drop-shadow-md font-extrabold text-4xl text-left pl-2">Kosár</h1>
            </div>
            <a href="/profil"><img src="/images/avatar/2289_SkVNQSBGQU1PIDEwMjgtMTIy.svg" alt="" class="w-24 h-24 pr-4"></a>
         </div>
         <div class="foodColCart">
            <div class="foodCard">
               <div class="basis-1/4">
                  <img src={pizza} alt="" class="w-16 h-16 rounded-md">
               </div>
               <div class="flex flex-row items-center justify-between basis-3/4">
               <h3 class="text-red-1 font-semibold text-2xl text-center">Kandós pizza</h3>
               <div class="flex flex-col justify-between h-full text-right">
                  <p class="font-semibold">500 Ft</p>
                  <p class="font-semibold">1 db</p>
               </div>
               </div>
            </div>
            <div class="foodCard">
               <div class="basis-1/4">
                  <img src={xixo} alt="" class="w-16 h-16 rounded-md">
               </div>
               <div class="flex flex-row items-center justify-between basis-3/4">
               <h3 class="text-red-1 font-semibold text-2xl text-center">Xixo Ice Tea</h3>
               <div class="flex flex-col justify-between h-full text-right">
                  <p class="font-semibold">440 Ft</p>
                  <p class="font-semibold">2 db</p>
               </div>
               </div>
            </div>
            <div class="foodCard" style="margin-bottom: 1.5rem;">
               <div class="basis-1/4">
                  <img src={nasi} alt="" class="w-16 h-16 rounded-md">
               </div>
               <div class="flex flex-row items-center justify-between basis-3/4">
               <h3 class="text-red-1 font-semibold text-2xl text-center">Sajtos chips</h3>
               <div class="flex flex-col justify-between h-full text-right">
                  <p class="font-semibold">280 Ft</p>
                  <p class="font-semibold">1 db</p>
               </div>
               </div>
               </div>
         </div>
      </div>
      <div class="flex flex-col">
         <div class="topRow">
            <h1 class="text-red-1 drop-shadow-md font-extrabold text-3xl text-left pl-4">Összesen:</h1>
            <h1 class="drop-shadow-md font-bold text-3xl pr-4">1220 Ft</h1>
         </div>
         <div class="flex flex-col items-center p-4">
            <button class="bg-red-1 text-white text-2xl px-8 py-8 rounded-md font-semibold shadow-lg shadow-red-1/50 w-full">Megrendelés</button>
            <p class="mt-8 mb-4">Fizetési kötelezettséggel járó megrendelés!</p>
         </div>
      </div>
   </div>
</main>