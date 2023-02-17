<script>
	import {fade} from 'svelte/transition';
	let etel = "/images/hambi.jpeg";
	let pizza = "/images/pizza.jpg";
	let melegszendvics = "/images/sajtos-sonkas-melegszendvics.jpg";
	let hotdog = "/images/hotdog.jpeg";
	let pogi = "/images/pogi.jpeg";
	let ital = "/images/cola.jpeg";
	let nasi = "/images/chips.jpeg";
	let egyeb = "/images/zsepi.jpeg";
	let selectedCard = 0;
	export let data;
</script>

<main in:fade={{duration: 180}} class="flex flex-col h-screen items-center">

	<div class="topBar">
		<div class="topRow">
			<h1 class="text-red-1 drop-shadow-md font-extrabold text-4xl text-left pl-4">Kandó Büfé</h1>
			<a href="/profil"><img src="/images/avatar/2289_SkVNQSBGQU1PIDEwMjgtMTIy.svg" alt="" class="w-24 h-24 pr-4"></a>
		</div>
		<div class="cardRow">
			<div on:click="{() => selectedCard = "Étel"}" class="navCard {selectedCard === "Étel" || selectedCard === 0 ? "opacity-100" : "opacity-50"}">
				<img src={etel} alt="hamburger" class="img">
				<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Ételek</p>
			</div>
			<div on:click="{() => selectedCard = "Ital"}" class="navCard {selectedCard === "Ital" || selectedCard === 0 ? "opacity-100" : "opacity-50"}">
				<img src={ital} alt="cola" class="img">
				<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Italok</p>
			</div>
			<div on:click="{() => selectedCard = "Nasi"}" class="navCard {selectedCard === "Nasi" || selectedCard === 0 ? "opacity-100" : "opacity-50"}">
					<img src={nasi} alt="chips" class="img">
					<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Nasik</p>
			</div>
			<div on:click="{() => selectedCard = "Egyéb"}" class="navCard {selectedCard === "Egyéb" || selectedCard === 0 ? "opacity-100" : "opacity-50"}">
					<img src={egyeb} alt="zsepi" class="img">
					<p class="text-center bg-white text-red-1 p-2 text-lg font-semibold rounded-b-md">Egyéb</p>
			</div>
		</div>
	</div>

	<div class="foodCol">
		{#each data.termekek as termek}
		{#if selectedCard == 0}
		<div class="foodCard">
			<div class="basis-1/3">
				<img src="/api/termekKepek/?termek={termek.id}" alt="" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">{termek.termek}</h3>
					<p class="text-center text-sm py-1 px-2">{termek.leiras}</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">{termek.ar} Ft</p>
				</div>
			</div>
		</div>
		{/if}
		{/each}
		{#each data.termekek as termek}
		{#if termek.kategoria == "Étel" && selectedCard == "Étel"}
		<div class="foodCard">
			<div class="basis-1/3">
				<img src="/api/termekKepek/?termek={termek.id}" alt="{termek.termek}" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">{termek.termek}</h3>
					<p class="text-center text-sm py-1 px-2">{termek.leiras}</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">{termek.ar} Ft</p>
				</div>
			</div>
		</div>
		{/if}
		{/each}
		{#each data.termekek as termek}
		{#if termek.kategoria == "Ital" && selectedCard == "Ital"}
		<div class="foodCard">
			<div class="basis-1/3">
				<img src="/api/termekKepek/?termek={termek.id}" alt="{termek.termek}" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">{termek.termek}</h3>
					<p class="text-center text-sm py-1 px-2">{termek.leiras}</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">{termek.ar} Ft</p>
				</div>
			</div>
		</div>
		{/if}
		{/each}
		{#each data.termekek as termek}
		{#if termek.kategoria == "Nasi" && selectedCard == 'Nasi'}
		<div class="foodCard">
			<div class="basis-1/3">
				<img src="/api/termekKepek/?termek={termek.id}" alt="{termek.termek}" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">{termek.termek}</h3>
					<p class="text-center text-sm py-1 px-2">{termek.leiras}</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">{termek.ar} Ft</p>
				</div>
			</div>
		</div>
		{/if}
		{/each}
		{#each data.termekek as termek}
		{#if termek.kategoria == "Egyéb" && selectedCard == 'Egyéb'}
		<div class="foodCard">
			<div class="basis-1/3">
				<img src="/api/termekKepek/?termek={termek.id}" alt="{termek.termek}" class="w-28 h-28 rounded-md">
			</div>
			<div class="flex flex-col items-center justify-between basis-2/3">
				<div>
					<h3 class="mt-2 font-semibold text-red-1 text-lg text-center">{termek.termek}</h3>
					<p class="text-center text-sm py-1 px-2">{termek.leiras}</p>
				</div>
				<div class="flex flex-row justify-end items-center w-40 ml-10">
					<p class="font-semibold">{termek.ar} Ft</p>
				</div>
			</div>
		</div>
		{/if}
		{/each}
	</div>
</main>