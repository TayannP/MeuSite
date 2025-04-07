<template>
  <div class="bg-black">
    <headerDefault />

    <main class="max-w-screen-xl mx-auto items-center text-center">
      <slot />
    </main>

    <!-- Rodapé do layout -->
    <FotterDefault />
  </div>
</template>

<script setup>
import FotterDefault from "~/components/Fotter/FotterDefault.vue";
</script>
