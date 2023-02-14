<script>
	//data-mdb-ripple="true" data-mdb-ripple-color="light"	
	//import 'tw-elements';
	import {
		fade
	} from 'svelte/transition';
	export let data;
	let etel = "/images/hambi.jpeg";
	let pizza = "/images/pizza.jpg";
	let melegszendvics = "/images/sajtos-sonkas-melegszendvics.jpg";
	let hotdog = "/images/hotdog.jpeg";
	let pogi = "/images/pogi.jpeg";
	let ital = "/images/cola.jpeg";
	let nasi = "/images/chips.jpeg";
	let egyeb = "/images/zsepi.jpeg";
</script>

<main in:fade={{duration: 180}} class="flex flex-col h-screen items-center">

	<div class="topBar">
		<h1 class="text-red-1 drop-shadow-md font-extrabold text-4xl text-center pb-4">Jónapot <span>{data.name}!</span></h1>
		<div class="cardRow">
			<div class="navCard">
				<img src={etel} alt="hamburger" class="img">
				<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Ételek</p>
			</div>
			<div class="navCard">
				<img src={ital} alt="cola" class="img">
				<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Italok</p>
			</div>
			<div class="navCard">
					<img src={nasi} alt="macska burger" class="img">
					<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Nasik</p>
			</div>
			<div class="navCard">
					<img src={egyeb} alt="macska burger" class="img">
					<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Egyéb</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-screen overflow-scroll">
		<div class="foodCard">
			<div class="basis-1/3">
				<img src={etel} alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">Fullos hamburger</h3>
					<p class="text-center text-sm py-1 px-2">100%-ban kézzel készült friss és finom burger.</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">800 Ft</p>
				</div>
			</div>
		</div>
		<div class="foodCard">
			<div class="basis-1/3">
				<img src={pizza} alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 text-red-1 font-semibold text-lg text-center">Kandós pizza</h3>
					<p class= "text-center text-sm py-1 px-2">A világ legfinomabb sonkás-sajtos pizzája. Ennyi.</p>
				</div>
				<div class="flex flex-row justify-end w-40 ml-10">
					<p class="font-semibold">600 Ft</p>
				</div>
			</div>
		</div>
		<div class="foodCard">
			<div class="basis-1/3">
				<img src={melegszendvics} alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 text-red-1 font-semibold text-lg text-center">Francia pirítós</h3>
					<p class=" text-center text-sm py-1 px-2">Egy melegszendvics ami után garantáltan nem maradsz éhes.</p>
				</div>
				<div class="flex flex-row justify-end w-40 ml-10">
					<p class="font-semibold">550 Ft</p>
				</div>
			</div>
		</div>
		<div class="foodCard">
			<div class="basis-1/3">
				<img src={hotdog} alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 text-red-1 font-semibold text-lg text-center">Hot dog</h3>
					<p class="text-center text-sm py-1 px-2">Kérheted ketchuppal, majonézzel, mustárral is.</p>
				</div>
				<div class="flex flex-row justify-end w-40 ml-10">
					<p class="font-semibold">500 Ft</p>
				</div>
			</div>
		</div>
		<div class="foodCard">
			<div class="basis-1/3">
				<img src={pogi} alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 text-red-1 font-semibold text-lg text-center">Pogácsa</h3>
					<p class="text-center text-sm py-1 px-2">Az ikonikus kandós pogi amit mindenki szeret.</p>
				</div>
				<div class="flex flex-row justify-end w-40 ml-10">
					<p class="font-semibold">300 Ft</p>
				</div>
			</div>
		</div>
	</div>
	<!--<h2>{data.splash}</h2>-->
</main>