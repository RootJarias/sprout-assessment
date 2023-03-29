<template>
  <header>
    <CMP_Navbar />
  </header>
  <section>
    <div class="drawer z-40">
      <input id="side-drawer" class="drawer-toggle" type="checkbox" />
      <div class="drawer-content">
        <router-view class="mt-[76px] p-5" />
      </div>
      <CMP_DrawerSide />
    </div>
  </section>
</template>

<script setup>
// Import Components
import CMP_Navbar from '../misc/Navbar.vue';
import CMP_DrawerSide from '../misc/DrawerSide.vue';
</script>
