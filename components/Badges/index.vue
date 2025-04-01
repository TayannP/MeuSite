<template>
  <div class="flex space-x-2">
    <!-- Primeiro Badge -->
    <span
      class="text-gray-800 text-sm font-semibold py-2 px-4 rounded-full border border-gray-300"
    >
      {{ badgeText1 }}
    </span>

    <!-- Segundo Badge -->
    <span
      class="text-gray-800 text-sm font-semibold py-2 px-4 rounded-full rounded-full border border-gray-300"
    >
      {{ badgeText2 }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  badgeText1: { type: String, required: true },
  badgeText2: { type: String, required: true },
});
</script>
