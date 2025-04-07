<template>
  <section
    ref="sectionRef"
    class="bg-[#D7DEE] flex flex-col items-start justify-center py-20 px-6 w-full"
  >
    <div class="w-full max-w-4xl mx-auto flex flex-col text-left space-y-4">
      <h2 class="text-3xl md:text-4xl font-bold text-[#213E60]">
        {{ title }}
      </h2>

      <h1 class="text-3xl md:text-4xl font-bold text-[#1D1B1B]">
        {{ titulo }}
      </h1>

      <ul class="space-y-2">
        <li
          v-for="(item, index) in subtitleList"
          :key="index"
          class="flex items-start text-[#1E1E1E] text-lg md:text-xl"
        >
          <span
            class="w-2 h-2 mt-3 mr-2 bg-[#1E1E1E] rounded-full flex-shrink-0"
          ></span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div v-if="$slots.default" class="mt- w-full">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  titulo: {
    type: String,
    default: "",
  },
});

// Divide o subtítulo por quebras de linha
const subtitleList = computed(
  () =>
    props.subtitle
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0),
  props.titulo
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
);

onMounted(() => {
  gsap.to(sectionRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });
});
</script>
