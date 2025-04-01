<template>
  <div class="bg-black">
    <headerDefault />

    <main class="max-w-screen-xl mx-auto items-center text-center">
      <slot />
    </main>

    <!-- Rodapé do layout -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
</script>
