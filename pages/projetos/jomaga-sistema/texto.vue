<template>
  <div class="flex items-center justify-center mt-24">
    <div class="text-center max-w-2xl opacity-0" ref="section">
      <h1
        class="text-2xl font-bold opacity-0 transform -translate-x-10"
        ref="title"
      >
        <span :class="titleColor1">{{ titlePart1 }}</span>
        <span :class="titleColor2"> {{ titlePart2 }}</span>
      </h1>
      <div
        class="border-b-4 w-1/3 mx-auto mt-1 opacity-0 transform scale-x-0"
        :class="underlineColor"
        ref="underline"
      ></div>
      <p
        class="mt-4 text-gray-700 leading-relaxed opacity-0 transform -translate-x-10"
        ref="subtitle"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

// Definição de Props
const props = defineProps({
  titlePart1: { type: String, required: true },
  titlePart2: { type: String, required: true },
  titleColor1: { type: String, default: "text-[#109CF1]" },
  titleColor2: { type: String, default: "text-[#318CE7]" },
  underlineColor: { type: String, default: "border-[#109CF1]" },
  subtitle: { type: String, required: true },
});

// Referências para os elementos do template
const section = ref(null);
const title = ref(null);
const subtitle = ref(null);
const underline = ref(null);

onMounted(async () => {
  await nextTick(); // Garante que a DOM está carregada antes de rodar GSAP

  // Verifica se os elementos existem
  if (!section.value || !title.value || !subtitle.value || !underline.value) {
    console.error("Erro: Elementos não encontrados na DOM.");
    return;
  }

  // Animações GSAP
  gsap.to(section.value, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 40%",
    },
  });

  gsap.to(title.value, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 40%",
    },
  });

  gsap.to(underline.value, {
    opacity: 1,
    scaleX: 1,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 40%",
    },
  });

  gsap.to(subtitle.value, {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 40%",
    },
  });
});
</script>

<style scoped>
/* Garante que o texto mantém formatação correta */
p {
  white-space: pre-line;
}
</style>
