<template>
  <section ref="container" class="w-full py-16 px-4 text-center">
    <div class="max-w-5xl mx-auto">
      <h2
        ref="titleEl"
        :class="['text-3xl md:text-4xl lg:text-5xl font-bold', titleColor]"
      >
        {{ title }}
      </h2>

      <p ref="subtitleEl" :class="['mt-4 text-lg md:text-xl', subtitleColor]">
        {{ subtitle }}
      </p>

      <!-- Imagem opcional -->
      <div v-if="imageSrc" ref="imageEl" class="mt-10 flex justify-center">
        <img :src="imageSrc" :alt="imageAlt" class="w-full max-w-3xl" />
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
const titleEl = ref(null);
const subtitleEl = ref(null);
const imageEl = ref(null);

const props = defineProps({
  title: {
    type: String,
    default: "Título Principal",
  },
  subtitle: {
    type: String,
    default: "Este é um subtítulo centralizado com texto explicativo.",
  },
  titleColor: {
    type: String,
    default: "text-[#213E60]",
  },
  subtitleColor: {
    type: String,
    default: "text-gray-600",
  },
  imageSrc: {
    type: String,
    default: "", // Se vazio, imagem não é renderizada
  },
  imageAlt: {
    type: String,
    default: "Imagem ilustrativa",
  },
});

onMounted(() => {
  gsap.from([titleEl.value, subtitleEl.value], {
    scrollTrigger: {
      trigger: container.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  if (imageEl.value) {
    gsap.from(imageEl.value, {
      scrollTrigger: {
        trigger: imageEl.value,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }
});
</script>
