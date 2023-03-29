<template>
  <header>
    <CMP_Navbar />
  </header>
  <section>
    <router-view class="mt-[76px] p-5" />
  </section>
</template>

<script setup>
// Import Components
import CMP_Navbar from '../misc/Navbar.vue';
</script>
