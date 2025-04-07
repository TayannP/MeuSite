<template>
  <section ref="section" class="mt-24">
    <div ref="imageContainer" class="container mx-auto max-w-4xl opacity-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <!-- A imagem do meio -->
        <div class="order-2 md:order-2">
          <img
            ref="imageCenter"
            src="/images/Bike.svg"
            alt="Imagem Centro"
            class="w-full h-auto rounded-lg shadow-lg object-cover opacity-0"
          />
        </div>
        <!-- A imagem da esquerda -->
        <div class="order-1 md:order-1">
          <img
            ref="imageLeft"
            src="/images/Medic.svg"
            alt="Imagem Esquerda"
            class="w-full h-auto rounded-lg shadow-lg object-cover opacity-0"
          />
        </div>
        <!-- A imagem da direita -->
        <div class="order-3 md:order-3">
          <img
            ref="imageRight"
            src="/images/Nearby.svg"
            alt="Imagem Direita"
            class="w-full h-auto rounded-lg shadow-lg object-cover opacity-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageContainer = ref(null);
const imageLeft = ref(null);
const imageCenter = ref(null);
const imageRight = ref(null);
const section = ref(null);

onMounted(async () => {
  await nextTick();

  gsap.to(imageContainer.value, {
    opacity: 1,
    duration: 1,
    delay: 1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: "top 40%",
      toggleActions: "play none none none",
    },
  });

  tl.to(imageCenter.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  })
    .to(
      imageLeft.value,
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    )
    .to(
      imageRight.value,
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    );
});
</script>

<style scoped>
img {
  opacity: 0;
  transform: translateY(50px);
}
</style>
