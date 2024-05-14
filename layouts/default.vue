<template>
  <div data-theme="chronorexDefault">
    <div class="max-sm:mx-[2%] sm:mx-[2%] md:mx-[5%] lg:mx-[10%]">
      <NuxtPage :sectionSelected="selectedSection" />
      <Footer></Footer>
    </div>
  </div>
</template>
<script></script>

<style>
body {
  --sb-track-color: #ffffff;
  --sb-thumb-color: #bf1522;
  --sb-size: 7px;
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 20px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 20px;
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>
