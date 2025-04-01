<template>
  <section
    ref="container"
    class="flex flex-col items-center justify-center py-12 px-6 opacity-0"
  >
    <!-- Texto -->
    <h1
      ref="title"
      class="text-4xl text-blue-500 font-bold mb-4 transform translate-x-[-100px] opacity-0"
    >
      Certificações
    </h1>

    <!-- Subtexto -->
    <p
      ref="subtext"
      class="text-lg text-gray-700 text-center transform translate-x-[-100px] opacity-0"
    >
      Nossos Serviços são atestados em algumas das principais certificações do
      mercado.
    </p>

    <!-- Imagem -->
    <div class="flex justify-center">
      <img
        ref="image"
        src="/public/images/certificados.svg"
        alt="Certificação"
        class="max-w-full opacity-0 transform translate-x-[100px]"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const title = ref(null);
const subtext = ref(null);
const image = ref(null);

onMounted(() => {
  gsap.fromTo(
    container.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top bottom", // Quando o topo do container atinge o fundo da tela
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    title.value,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    subtext.value,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    image.value,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    }
  );
});
</script>

<style scoped>
/* Estilos adicionais (se necessário) */
</style>
