<template>
    <div class="sb my-16">
         <span class=" text-center "><h1 class=" text-xl my-4  font-bold">Mor than +2K Stores are with us</h1></span>
        <div class="flex w-full overflow-auto sb max-sm:grid sm:grid md:flex grid-cols-2 gap-2 ">
            <div class="grid h-20 flex-grow card  col-span-1  rounded-box place-items-center"><NuxtImg src="/client-2.png" class=" max-w-28"></NuxtImg></div>
            <div class="divider divider-horizontal  max-sm:hidden sm:hidden"></div>
            <div class="grid h-20 flex-grow card col-span-1 rounded-box place-items-center"><NuxtImg src="/client-3.png" class=" max-w-28"></NuxtImg></div>
            <div class="divider divider-horizontal  max-sm:hidden sm:hidden"></div>
            <div class="grid h-20 flex-grow card col-span-1  rounded-box place-items-center"><NuxtImg src="/client-4.png" class=" max-w-28"></NuxtImg></div>
            <div class="divider divider-horizontal  max-sm:hidden sm:hidden"></div>
            <div class="grid h-20 flex-grow card col-span-1 rounded-box place-items-center"><NuxtImg src="/client-5.png" class=" max-w-28"></NuxtImg></div>
            <div class="divider divider-horizontal  max-sm:hidden sm:hidden"></div>
            <div class="grid h-20 flex-grow card col-span-1  rounded-box place-items-center"><NuxtImg src="/client-6.png" class=" max-w-28"></NuxtImg></div>
            <div class="divider divider-horizontal  max-sm:hidden sm:hidden"></div>
            <div class="grid h-20 flex-grow card col-span-1  rounded-box place-items-center"><NuxtImg src="/client-9.png" class=" max-w-28"></NuxtImg></div>
          </div>
    </div>
</template>
<style>
.sb {
    --sb-track-color: #ffffff;
    --sb-thumb-color: #bf1522;
    --sb-size: 1px;
  }
  
  .sb::-webkit-scrollbar {
    width: var(--sb-size);
  }
  
  .sb::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 20px;
  }
  
  .sb::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 20px;
  }
  
  @supports not selector(::-webkit-scrollbar) {
    .sb {
        scrollbar-color: var(--sb-thumb-color)
                       var(--sb-track-color);
    }
  }
</style>