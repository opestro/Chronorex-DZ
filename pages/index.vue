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
    <div class=" ">
      <Hero id="" class=""></Hero>
      <partners id="Partners" class=""></partners>
      <services id="Services"></services>
      <delivery-steps id="Delivery Journey" class=""></delivery-steps>
      <dz-label id="Coverage"></dz-label>
      <cgl id="" class=""></cgl>
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
