<template>
  <div>
    <NavBar
      @sectionSelected="
        (section) => {
          selectedSection = section;
          console.log(selectedSection);
          scrollToAnchor(section);
        }
      "
    ></NavBar>
    <div class="mx-[10%]">
      <Hero id="" class="my-5"></Hero>
      <partners id="Partners" class="my-5"></partners>
      <services id="Services"></services>
      <delivery-steps id="Delivery Journey" class="my-5"></delivery-steps>
      <dz-label id="Coverage"></dz-label>
      <cgl id="" class="my-5"></cgl>
    </div>
  </div>
</template>
<script setup>
const selectedSection = ref();
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: "smooth",
      offsetTop: 0,
    },
  },
});

watchEffect(() => {
  selectedSection;
});
</script>
