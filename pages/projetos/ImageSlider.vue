<template>
  <div
    ref="sliderSection"
    class="relative max-w-4xl mx-auto opacity-0 translate-y-10"
  >
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-1000"
        ref="slider"
        :style="sliderStyles"
      >
        <div
          v-for="(image, index) in sliderImages"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <NuxtLink :to="image.link">
            <img
              :src="`/images/${image.src}`"
              :alt="image.alt"
              class="w-full h-auto object-cover"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Quadradinhos de navegação -->
    <div
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <div
        v-for="(image, index) in sliderImages"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full cursor-pointer',
          currentIndex === index ? 'bg-blue-500' : 'bg-gray-400',
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  sliderImages: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const totalSlides = ref(0);
const slider = ref(null);
const sliderSection = ref(null);

const sliderStyles = ref({
  transform: `translateX(-${currentIndex.value * 100}%)`,
});

onMounted(async () => {
  await nextTick(); // Garante que o Vue tenha atualizado o DOM antes do GSAP

  if (props.sliderImages && props.sliderImages.length > 0) {
    totalSlides.value = props.sliderImages.length;

    gsap.to(sliderSection.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sliderSection.value,
        start: "top 40%", // Quando 80% da seção entra na tela
        toggleActions: "play none none reset",
      },
    });

    ScrollTrigger.refresh(); // Garante que o ScrollTrigger detecte a seção
  }
});

watch(
  () => props.sliderImages.length,
  (newLength) => {
    if (newLength > 0) {
      totalSlides.value = newLength;
    }
  }
);

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
  updateSlider();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
  updateSlider();
};

const goToSlide = (index) => {
  currentIndex.value = index;
  updateSlider();
};

const updateSlider = () => {
  gsap.to(slider.value, {
    x: `-${currentIndex.value * 100}%`,
    duration: 1,
    ease: "power2.out",
  });
};
</script>

<style scoped>
/* Ajuste o tamanho das imagens se necessário */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilo para os indicadores (quadradinhos) */
div {
  transition: background-color 0.3s ease;
}
</style>
