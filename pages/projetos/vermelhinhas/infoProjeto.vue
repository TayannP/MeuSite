<template>
  <section ref="container" class="w-full py-16 px-6 bg-white">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <!-- Coluna 1 -->
      <div ref="leftCol" class="text-left">
        <h2 :class="['text-3xl md:text-4xl font-bold mb-4', titleColor]">
          {{ title1 }}
        </h2>
        <p :class="['text-md md:text-xl', subtitleColor]">
          {{ subtitle1 }}
        </p>
      </div>

      <!-- Coluna 2 -->
      <div
        ref="rightCol"
        class="flex flex-col items-center text-center md:text-left"
      >
        <h3 :class="['text-2xl font-semibold mb-4', secondTitleColor]">
          {{ title2 }}
        </h3>
        <p :class="['text-md md:text-xl', subtitleColor]">
          {{ subtitle2 }}
        </p>
        <img
          :src="imageSrc"
          :alt="title2"
          class="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const leftCol = ref(null);
const rightCol = ref(null);

onMounted(() => {
  // Anima o container (só aparece ao rolar)
  gsap.from(container.value, {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: container.value,
      start: "top 40%",
      toggleActions: "play none none none",
    },
  });

  // Coluna esquerda (entra da esquerda)
  gsap.from(leftCol.value, {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: container.value,
      start: "top 45%",
      toggleActions: "play none none none",
    },
  });

  // Coluna direita (entra da direita)
  gsap.from(rightCol.value, {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: container.value,
      start: "top 45%",
      toggleActions: "play none none none",
    },
  });
});

defineProps({
  title1: { type: String, default: "Coluna da Esquerda" },
  subtitle1: {
    type: String,
    default: "Este é o subtítulo da primeira coluna.",
  },
  title2: { type: String, default: "" },
  subtitle2: { type: String, default: "" },
  imageSrc: { type: String, default: "/img/exemplo.jpg" },
  titleColor: { type: String, default: "text-[#FF5151]" },
  subtitleColor: { type: String, default: "text-gray-700" },
  secondTitleColor: { type: String, default: "text-[#FF5151]" },
});
</script>
