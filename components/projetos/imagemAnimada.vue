<template>
  <div class="flex justify-center items-center py-16" ref="imageContainer">
    <img :src="imageUrl" :alt="altText" class="opacity-0" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  imageUrl: { type: String, required: true },
  altText: { type: String, required: true },
});

const imageContainer = ref(null);

onMounted(() => {
  if (imageContainer.value) {
    gsap.fromTo(
      imageContainer.value.children[0], // Acessa a imagem dentro do container
      { opacity: 0, scale: 0.8 }, // Começa invisível e menor
      {
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageContainer.value, // Ativa a animação quando o usuário chega na seção
          start: "top 40%", // Só começa quando 80% da seção está visível
          toggleActions: "restart none none none", // Sempre anima ao rolar para baixo
        },
      }
    );
  }
});
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
