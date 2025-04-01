<template>
  <section>
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-24 mt-24"
    >
      <!-- Coluna 1: Problema -->
      <div class="flex flex-col justify-center" ref="problemaColumn">
        <h2 class="text-3xl font-semibold text-orange-500 mb-4">Problema</h2>
        <p class="text-lg text-black mb-6">
          Atualmente, o bondinho do Pão de Açúcar enfrenta dificuldades devido à
          falta de um sistema digital eficiente que integre todas as
          necessidades dos visitantes e da operação turística.
        </p>
        <p class="text-lg text-orange-500">
          Como é possível possibilitar que o usuário faça seu passeio sem
          nenhuma dor de cabeça?
        </p>
      </div>

      <!-- Coluna 2: Proposta de solução -->
      <div class="flex flex-col justify-center" ref="solucaoColumn">
        <h2 class="text-3xl font-semibold text-orange-500 mb-4">
          Proposta de solução:
        </h2>
        <p class="text-lg text-black mb-6">
          Planejar e arquitetar um Sistema/APP que permite que o usuário faça
          todo o percurso digitalmente sem a necessidade de sair de casa para
          enfrentar filas e etc, proporcionando uma visitação mais organizada,
          confortável e segura para o usuário.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

// Refs para as colunas
const problemaColumn = ref(null);
const solucaoColumn = ref(null);

// Animação para as colunas
onMounted(() => {
  gsap.fromTo(
    problemaColumn.value,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: problemaColumn.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    solucaoColumn.value,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: solucaoColumn.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
</script>
