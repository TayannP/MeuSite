<template>
  <section
    ref="sectionRef"
    class="bg-[#213E60] flex flex-col items-start justify-center py-20 px-6 w-full mt-24 opacity-0 translate-y-10"
  >
    <div class="w-full max-w-4xl mx-auto flex flex-col text-left space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold text-white">
        {{ title }}
      </h2>

      <ul class="space-y-3">
        <li
          v-for="(item, index) in subtitleList"
          :key="index"
          class="flex items-start text-gray-200 text-lg md:text-xl"
        >
          <span
            class="w-2 h-2 mt-3 mr-2 bg-white rounded-full flex-shrink-0"
          ></span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div v-if="$slots.default" class="mt-8 w-full">
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
});

// Divide o subtítulo por quebras de linha
const subtitleList = computed(() =>
  props.subtitle
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
