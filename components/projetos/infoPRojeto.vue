<template>
  <section
    class="flex flex-col items-center justify-center py-20 px-6"
    ref="sectionContainer"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 items-center">
      <!-- Coluna de Texto -->
      <div class="text-white text-center md:text-left lg:text-left ml-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span v-html="title"></span>
        </h2>
        <!-- Botão com efeito de deslize na cor -->
        <div class="mt-6 relative inline-block">
          <a
            :href="buttonLink"
            class="relative overflow-hidden flex items-center gap-3 bg-gradient-to-r from-white via-gray-500 to-gray-800 text-black px-6 py-3 rounded-md text-lg font-medium hover:opacity-80 transition-all duration-300"
          >
            {{ buttonText }}
            <span class="text-2xl">➜</span>
            <!-- Efeito de deslize -->
            <span
              class="absolute inset-0 bg-white opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
            ></span>
          </a>
        </div>
      </div>

      <!-- Coluna de Imagem -->
      <div ref="imageContainer" class="flex justify-center md:justify-end">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

// Definição das props
defineProps({
  title: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
});

const sectionContainer = ref(null);
const imageContainer = ref(null);

onMounted(() => {
  // Animação para a seção de texto
  if (sectionContainer.value) {
    gsap.fromTo(
      sectionContainer.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionContainer.value,
          start: "top 40%", // Começa a animação quando a seção entra 80% da tela
          toggleActions: "play none none none",
          once: true, // Garante que a animação acontece apenas uma vez
        },
      }
    );
  }

  // Animação para a imagem
  if (imageContainer.value) {
    gsap.fromTo(
      imageContainer.value,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainer.value,
          start: "top 40%", // Começa a animação quando a imagem entra 80% da tela
          toggleActions: "play none none none",
        },
      }
    );
  }
});
</script>

<style scoped>
/* Ajuste de estilos, se necessário */
</style>
