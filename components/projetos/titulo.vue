<template>
  <section
    class="flex flex-col items-center justify-center py-20 px-6 mt-24 max-w-7xl mx-auto"
    ref="container"
  >
    <!-- Título -->
    <h1
      class="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight"
      ref="titleElement"
    >
      {{ title }}
    </h1>

    <!-- Subtítulo -->
    <p
      class="mt-4 sm:text-4xl md:text-5xl lg:text-2xl text-center text-black"
      ref="subtitleElement"
    >
      {{ subtitle }}
    </p>
    badgeText1="Website Design" badgeText2="Develop"
    <!-- Botões -->
    <div class="mt-6 space-x-4">
      <Badges badgeText1="UX/UI" badgeText2="Develop" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import Badges from "~/components/Badges";

const props = defineProps({
  title: {
    type: String,
    default: "Projeto",
  },
  subtitle: {
    type: String,
    default: "Ajudei a desenvoler o Projeto.",
  },
  buttonText: {
    type: String,
    default: "Website Design e Development",
  },
  buttonSubText: {
    type: String,
    default: "Website Design e Development",
  },
});

const container = ref(null);
const titleElement = ref(null);
const subtitleElement = ref(null);

onMounted(() => {
  // Animação do container
  gsap.from(container.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  // Animação do título
  gsap.from(titleElement.value, {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Animação do subtítulo
  gsap.from(subtitleElement.value, {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });
});
</script>
