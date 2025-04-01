<template>
  <section
    ref="section"
    class="flex flex-col items-center justify-center text-center py-20 px-8 opacity-0 mt-12 translate-y-10"
    :class="bgColor"
  >
    <div class="px-4">
      <h1
        class="text-3xl md:text-5xl sm:text-4xl lg:text-6xl font-bold leading-tight"
        :class="textColor"
      >
        <span :class="gradientClass">
          {{ title }}
        </span>
      </h1>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  title: { type: String, required: true },
  bgColor: { type: String, default: "bg-black" },
  textColor: { type: String, default: "text-white" },
  gradientClass: {
    type: String,
    default:
      "bg-gradient-to-r from-white via-gray-500 to-gray-400 bg-clip-text text-transparent",
  },
});

const section = ref(null);

onMounted(async () => {
  await nextTick();

  if (section.value) {
    gsap.to(section.value, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.value,
        start: "top 30%", // Inicia a animação quando 80% da seção estiver visível
        end: "top 50%", // Apenas para referência, mas não afeta a animação
        toggleActions: "play none none none",
      },
    });
  }
});
</script>
