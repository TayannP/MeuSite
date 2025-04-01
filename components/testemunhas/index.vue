<template>
  <section
    class="items-center text-center py-20 px-6 opacity-0"
    ref="sectionContainer"
  >
    <div>
      <!-- Foto da pessoa -->
      <img
        :src="avatarUrl"
        :alt="name"
        class="w-24 h-24 rounded-full mx-auto shadow-lg"
      />

      <!-- Depoimento -->
      <h1
        class="text-white text-3xl md:text-3xl mt-6"
        v-html="formattedTestimonial"
      ></h1>

      <!-- Nome e Cargo -->
      <div class="mt-4">
        <h3 class="text-lg lg:text-2xl font-bold text-white">{{ name }}</h3>
        <p class="text-gray-400 text-lg">{{ jobTitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Propriedades do componente
const props = defineProps({
  avatarUrl: { type: String, required: true },
  name: { type: String, required: true },
  testimonial: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

const sectionContainer = ref(null);

// Computed property para formatar o testimonial
const formattedTestimonial = computed(() =>
  props.testimonial.replace(/\n/g, "<br />")
);

onMounted(() => {
  if (sectionContainer.value) {
    gsap.fromTo(
      sectionContainer.value,
      { opacity: 0, y: 50 }, // Estado inicial: invisível e deslocado para baixo
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionContainer.value,
          start: "top 40%", // Inicia quando 80% do elemento estiver visível
          toggleActions: "play none none none",
        },
      }
    );
  }
});
</script>
