<script>
export let data;
let form;
</script>

<main>
   <div class="flex flex-col h-screen justify-between">
      <div class="topRow h-24">
         <div class="flex flex-row items-center basis-1/3">
            <a href="/"><i class="fa-solid fa-caret-left fa-3x text-red-1 ml-4"></i></a>
         </div>
         <h1 class="text-red-1 drop-shadow-md font-extrabold text-right text-4xl pl-2 justify-center basis-2/3 mr-4">{data.name}</h1>
      </div>

      <div class="m-10 flex items-center text-center flex-col basis-1/3 justify-between">
         <form bind:this={form} action="?/changeAvatar" method="POST" enctype="multipart/form-data">
            <label for="avatar">
            <img src="/api/avatar" alt="avatar" class="rounded-full border-red-1 border-4 border-dashed shadow-lg">
            <input on:input={form.submit()} hidden type="file" name="avatar" id="avatar" value="" >
         </label>
         </form>
      </div>

      <div class="flex flex-col logout justify-end basis-1/3 p-4">
         <form method="POST" action="?/logout">
            <button class="bg-red-1 text-white text-2xl px-8 py-8 rounded-md font-semibold shadow-lg shadow-red-1/50 w-full">Kijelentkezés</button>
         </form>
      </div>
   </div>
</main>