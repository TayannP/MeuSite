<template>
  <div class="bg-white">
    <!-- Layout Alternativo -->
    <headerProjetos />

    <main class="max-w-screen-xl mx-auto items-center text-center">
      <slot />
    </main>

    <!-- Rodapé do layout -->
    <FotterProjeto />
  </div>
</template>

<script setup>
import FotterProjeto from "~/components/Fotter/FotterProjeto";
</script>
