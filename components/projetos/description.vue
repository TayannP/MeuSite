<template>
  <div
    ref="container"
    class="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1fr_4px_1fr] gap-8 opacity-0"
  >
    <!-- Primeira Coluna: Textos -->
    <div ref="textContainer" class="flex flex-col justify-center">
      <p class="text-lg text-gray-900 leading-relaxed">
        {{ firstText }}
      </p>
      <p class="text-lg text-gray-900 leading-relaxed mt-6">
        {{ secondText }}
      </p>
    </div>

    <!-- Divisor Vertical -->
    <div
      ref="divider"
      class="hidden md:block bg-gray-300 w-[2px] mx-auto scale-y-0 opacity-0"
    ></div>

    <!-- Segunda Coluna: Informações e Botão -->
    <div
      ref="infoContainer"
      class="flex flex-col justify-center space-y-8 opacity-0 translate-x-10"
    >
      <div class="space-y-8 text-gray-800">
        <div>
          <p class="font-regular text-gray-400">Setor</p>
          <p>Tecnologia</p>
        </div>
        <div>
          <p class="font-regular text-gray-400">Sede</p>
          <p>Rj, Brasil</p>
        </div>
        <div>
          <p class="font-regular text-gray-400">Estágio</p>
          <p>Projeto Publicado</p>
        </div>
      </div>

      <!-- Botão -->
      <NuxtLink
        :to="websiteUrl"
        class="flex ml-24 items-center justify-center border-2 border-black text-black px-2 py-2 w-60 text-base hover:bg-black hover:text-white transition"
      >
        {{ buttonText }}
        <svg
          class="ml-2 w-6 h-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  firstText: {
    type: String,
    default:
      "A Jomaga contou com a nossa expertise para desenvolver seu site institucional, garantindo uma presença digital robusta e alinhada à sua identidade. Nosso trabalho envolveu desde a concepção e estruturação até a implementação de soluções estratégicas para melhorar a experiência do usuário e a performance da plataforma.",
  },
  secondText: {
    type: String,
    default:
      "Nosso compromisso foi traduzir a visão da empresa em um ambiente digital intuitivo e eficiente. Através da combinação de design moderno, responsividade e otimização de performance, ajudamos a Jomaga a fortalecer sua marca no cenário online e a oferecer uma navegação fluida e envolvente para seus clientes.",
  },
  buttonText: {
    type: String,
    default: "Visite o Website",
  },
  websiteUrl: {
    type: String,
    default: "/projetos/jomaga",
  },
});

const container = ref(null);
const textContainer = ref(null);
const divider = ref(null);
const infoContainer = ref(null);
const imageContainer = ref(null);

onMounted(() => {
  // Animação para o container
  gsap.fromTo(
    container.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top bottom", // Começa quando o topo do container atinge o fundo da tela
        end: "bottom top", // A animação termina quando o fundo do container atinge o topo da tela
        toggleActions: "play none none none", // A animação inicia apenas uma vez
      },
    }
  );

  // Animação para o texto
  gsap.fromTo(
    textContainer.value.children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%", // Começa a animação quando o topo da tela atinge 20%
        toggleActions: "play none none none",
      },
    }
  );

  // Animação para o divisor
  gsap.fromTo(
    divider.value,
    { scaleY: 0, opacity: 0 },
    {
      scaleY: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%", // Começa a animação quando o topo da tela atinge 20%
        toggleActions: "play none none none",
      },
    }
  );

  // Animação para a segunda coluna (informações e botão)
  gsap.fromTo(
    infoContainer.value,
    { opacity: 0, x: 10 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.value,
        start: "top 50%", // Começa a animação quando o topo da tela atinge 20%
        toggleActions: "play none none none",
      },
    }
  );

  // Animação para o novo elemento genérico (começa a animação quando ele entra a 40% da tela)
  gsap.fromTo(
    imageContainer.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageContainer.value,
        start: "top 50%", // Começa a animação quando o elemento entra 40% da tela
        toggleActions: "play none none none",
      },
    }
  );
});
</script>
