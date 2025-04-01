<template>
  <section class="flex flex-col items-center justify-center py-20 px-6 mt-24">
    <h1
      class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight opacity-0"
      ref="title"
    >
      {{ titleFirst }}
      <span
        class="bg-gradient-to-r from-white via-gray-500 to-gray-800 bg-clip-text text-transparent"
      >
        {{ titleMiddle }}
      </span>
      <span
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500"
      >
        {{ titleHighlight }}
      </span>
      <br />

      <span
        class="bg-gradient-to-r from-white via-gray-500 to-gray-800 bg-clip-text text-transparent"
      >
        {{ titleEnd }}
      </span>
    </h1>

    <!-- Subtítulo -->
    <p
      class="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mt-2 opacity-0"
      ref="subtitle"
    >
      {{ subtitle }}
      <!-- Aqui o subtitle será apenas um texto (string) -->
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

// Definindo as propriedades passadas para o componente
defineProps({
  titleFirst: { type: String, default: "Inspiro empresas" },
  titleMiddle: { type: String, default: "a alcançar o" },
  titleHighlight: { type: String, default: "extraordinário" },
  titleEnd: { type: String, default: "e construir um futuro marcante" },
  subtitle: {
    type: String,
    default:
      "Projetos inovadores que vão além do convencional, criando conexões inteligentes e soluções impactantes.",
  },
});

onMounted(() => {
  const title = document.querySelector("h1");
  const subtitle = document.querySelector("p");
  // Animação para o título
  gsap.fromTo(
    title,
    {
      opacity: 0,
      y: -50, // Começa acima
    },
    {
      opacity: 1,
      y: 0, // Finaliza na posição original
      duration: 1.0,
      ease: "power2.out",
    }
  );

  // Animação para o subtítulo
  gsap.fromTo(
    subtitle,
    {
      opacity: 0,
      y: -30, // Começa acima
    },
    {
      opacity: 1,
      y: 0, // Finaliza na posição original
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3, // Atraso para o subtítulo aparecer após o título
    }
  );
});
</script>

<style scoped>
/* Inicialmente, as opacidades começam como 0 para não aparecerem antes da animação */
</style>
