<template>
  <div class="flex justify-center space-x-24 mt-24" ref="imagesContainer">
    <!-- Primeira Imagem com Link (Interno com NuxtLink) -->
    <NuxtLink :to="link1">
      <img
        ref="image1"
        :src="`/images/${imageSrc1}`"
        :alt="imageAlt1"
        class="image w-100 h-auto rounded-lg shadow-lg cursor-pointer opacity-0 transform"
      />
    </NuxtLink>

    <!-- Segunda Imagem com Link (Interno com NuxtLink) -->
    <NuxtLink :to="link2">
      <img
        ref="image2"
        :src="`/images/${imageSrc2}`"
        :alt="imageAlt2"
        class="image w-100 h-auto rounded-lg shadow-lg cursor-pointer opacity-0 transform"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrando o ScrollTrigger com GSAP
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  imageSrc1: { type: String, required: true },
  imageAlt1: { type: String, required: true },
  link1: { type: String, required: true },
  imageSrc2: { type: String, required: true },
  imageAlt2: { type: String, required: true },
  link2: { type: String, required: true },
});

const image1 = ref(null);
const image2 = ref(null);

onMounted(() => {
  // Primeira imagem (esquerda) aparece primeiro
  gsap.fromTo(
    image1.value,
    { opacity: 0, x: -50 }, // Começa invisível e deslocado para a esquerda
    {
      opacity: 1,
      x: 0, // Move para a posição original
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image1.value,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    }
  );

  // Segunda imagem (direita) aparece depois de um pequeno atraso
  gsap.fromTo(
    image2.value,
    { opacity: 0, x: 50 }, // Começa invisível e deslocado para a direita
    {
      opacity: 1,
      x: 0, // Move para a posição original
      duration: 1,
      ease: "power2.out",
      delay: 0.3, // Pequeno atraso após a primeira imagem
      scrollTrigger: {
        trigger: image2.value,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    }
  );
});
</script>

<style scoped>
/* Estilo para as imagens */
.image {
  max-width: 100%;
  height: auto;
  transition: transform 0.4s ease-in-out, opacity 0.6s ease-out;
}

.image:hover {
  transform: scale(1.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
    align-items: center;
  }
  .space-x-24 {
    gap: 20px;
  }
}
</style>
