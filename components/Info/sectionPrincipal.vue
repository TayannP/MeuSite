<template>
  <section class="py-20 px-6 mt-24" ref="section">
    <!-- Container com largura máxima personalizada -->
    <div class="px-4">
      <!-- Texto principal -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        ref="title"
      >
        Transformando o
        <span
          class="bg-gradient-to-r from-white via-gray-500 to-gray-800 bg-clip-text text-transparent"
          >futuro</span
        >
        por meio de Design inovador e tecnologia avançada.
      </h1>

      <!-- Subtexto -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4"
        ref="subtitle"
      >
        Colaborei com +100 Empresas e Startups como parceiro estratégico em
        Design e Desenvolvimento, incluindo:
      </p>

      <!-- Imagens (5 logos) -->
      <div
        class="flex flex-wrap justify-center items-center sm:gap-12 md:gap-16 lg:gap-10 mt-8"
        ref="images"
      >
        <img
          src="/images/jomaga-logo.svg"
          alt="Empresa 1"
          class="h-12 sm:h-14 md:h-16"
        />
        <img
          src="/images/marica-logo.svg"
          alt="Empresa 2"
          class="h-12 sm:h-14 md:h-16"
        />
        <img
          src="/images/petrobras-logo.svg"
          alt="Empresa 3"
          class="h-12 sm:h-14 md:h-16"
        />
        <img
          src="/images/atta-logo.svg"
          alt="Empresa 4"
          class="h-12 sm:h-14 md:h-16"
        />
        <img
          src="/images/governorj-logo.svg"
          alt="Empresa 5"
          class="h-12 sm:h-14 md:h-16"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const section = ref(null);
const title = ref(null);
const subtitle = ref(null);
const images = ref(null);

onMounted(() => {
  // Animação de entrada
  gsap.from(title.value, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(subtitle.value, {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(images.value.children, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power2.out",
    stagger: 0.2,
  });
});
</script>
