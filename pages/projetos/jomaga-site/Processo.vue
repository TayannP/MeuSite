<template>
  <section class="flex flex-col items-center justify-center py-14 px-4 w-full">
    <!-- Título principal -->
    <h2 class="text-3xl md:text-4xl font-bold text-center text-black mb-12">
      {{ mainTitle }}
    </h2>

    <!-- Lista de etapas -->
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col items-center"
    >
      <!-- Quadrado com conteúdo -->
      <div
        class="w-[360px] md:w-[420px] lg:w-[520px] h-[220px] border border-gray-300 rounded-2xl flex flex-col items-center justify-center text-center bg-white shadow-lg px-6 py-4"
      >
        <h3 class="text-2xl font-bold text-[#213E60] mb-3">
          {{ step.title }}
        </h3>
        <p class="text-gray-600 text-lg leading-snug">
          {{ step.subtitle }}
        </p>
      </div>

      <!-- Seta para baixo -->
      <svg
        v-if="index < steps.length - 1"
        class="w-6 h-6 my-6 text-gray-500 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
defineProps({
  mainTitle: {
    type: String,
    default: "Etapas do Processo",
  },
});

const steps = [
  {
    title: "Identifique o problema",
    subtitle:
      "Identificamos os problemas que estão levando à incompletude dos objetivos comerciais e dos usuários.",
  },
  {
    title: "Research & Analyze",
    subtitle:
      "Pesquisamos e analisamos os concorrentes no mercado, identificando boas práticas, diferenciais e oportunidades de melhoria. A partir disso, obtivemos insights valiosos sobre as principais referências do setor, ajudando a direcionar estratégias para fortalecer a presença digital da Jomaga.",
  },
  {
    title: "Ideate",
    subtitle:
      "Nós idealizamos e fazemos um brainstorming sobre como podemos criar o site a partir dos insights derivados dos processos acima.",
  },
  {
    title: "Wireframing",
    subtitle:
      "Nós criamos um wireframe do site para formar uma ideia geral sobre a estrutura do conteúdo e o layout. Usamos sketchbooks, pois é mais rápido idealizar e iterar usando caneta e papel na velocidade do pensamento.",
  },
  {
    title: "Hi-Fi Design",
    subtitle:
      "Nós criamos designs Hi-Fi com base em nossos wireframes e estrutura de conteúdo para aprovação do cliente, revisões e, finalmente, repassamos a um desenvolvedor para desenvolvimento.",
  },
];
</script>
