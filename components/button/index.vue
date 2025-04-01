<template>
  <div class="mt-6 relative inline-block">
    <a
      :href="buttonLink"
      class="relative overflow-hidden flex items-center gap-3 bg-gradient-to-r from-white via-gray-500 to-gray-800 text-black px-6 py-3 rounded-md text-lg font-medium cursor-pointer"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      {{ buttonText }}
      <span class="text-2xl">➜</span>

      <!-- Efeito de deslize -->
      <span
        ref="slideEffect"
        class="absolute inset-0 bg-white opacity-20 translate-x-[-100%] transition-transform duration-1000 ease-in-out"
      ></span>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true },
});

const slideEffect = ref(null);

const onMouseEnter = () => {
  gsap.to(slideEffect.value, {
    x: "100%", // Move a cor da esquerda para a direita
    duration: 1.2, // Duração da animação
    ease: "power2.out", // Tipo de suavização
  });
};

const onMouseLeave = () => {
  gsap.to(slideEffect.value, {
    x: "-100%", // Move de volta para a esquerda
    duration: 1.2, // Duração da animação
    ease: "power2.in", // Tipo de suavização
  });
};
</script>

<style scoped>
a {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
