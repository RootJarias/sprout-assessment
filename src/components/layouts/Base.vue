<template>
  <header>
    <CMP_Navbar />
  </header>
  <main>
    <div class="drawer z-40">
      <input id="side-drawer" class="drawer-toggle" type="checkbox" />
      <div class="drawer-content mt-[76px]">
        <section
          class="container px-[50px] pt-[50px] pb-[120px] sm:px-[25px] sm:pt-[25px]"
        >
          <router-view />
        </section>
      </div>
      <CMP_DrawerSide />
    </div>
  </main>
</template>

<script setup>
// Import Components
import CMP_Navbar from '../misc/Navbar.vue';
import CMP_DrawerSide from '../misc/DrawerSide.vue';
</script>

<style scoped>
@media only screen and (max-width: 1440px) {
  .container {
    max-width: 100%;
  }
}
</style>
