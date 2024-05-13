<template>
  <div class="hero   justify-center my-5 ">
    <div class="hero-content   flex flex-col justify-center items-center">
      <div class="w-6/12 md:w-8/12 sm:w-10/12 max-sm:w-11/12">
        <div class="items-center text-center">
          <div class="flex flex-col gap-2">
            <h1 class="text-5xl font-bold">Delivering Your Orders</h1>
            <div class="flex justify-center text-center align-center">
              <p>by</p>
              <h1 class="text-5xl font-bold text-primary">CHRONOREX</h1>
            </div>
          </div>

          <p class="py-6">
            {{ description }}
          </p>
          <div class="flex flex-col justify-center items-center">
            <div class="w-5/12">
              <label
                class="input-bordered flex items-center justify-center gap-2 border-0"
              >
                <span class="btn shadow-none bg-white border-0"
                  ><Icon name="iconamoon:location-pin-fill" color="black"
                /></span>
                <input
                  type="text"
                  class="grow input"
                  placeholder="CHRX58847526"
                />
                <span class="btn bg-secondary m-1"
                  ><Icon name="iconamoon:search-fill" color="white "
                /></span>
              </label>
            </div>
            <img
              src="/public/hero-section.png"
              class=" max-sm:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-lg"
            />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const description = "عليك البيع و علينا التوصيل";
</script>
