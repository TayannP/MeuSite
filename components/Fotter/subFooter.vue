<template>
  <div class="flex items-center justify-center mt-8">
    <div ref="container" class="flex items-center space-x-4">
      <!-- Quadrado com o ícone -->
      <div
        ref="iconBox"
        :class="[
          'w-16 h-16 flex items-center justify-center rounded-lg shadow-lg',
          bgColor,
        ]"
      >
        <svg
          ref="icon"
          class="w-8 h-8"
          :class="iconColor"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path :d="iconPath" />
        </svg>
      </div>

      <!-- Texto ao lado -->
      <div class="text-left">
        <p class="text-gray-800 text-lg font-semibold">
          {{ message }}
        </p>
        <a
          ref="link"
          :href="link"
          :class="['underline text-sm font-medium', linkColor]"
        >
          {{ linkText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

// Definição de Props
defineProps({
  message: {
    type: String,
    default: "Deseja mais informações sobre o Projeto?",
  },
  link: { type: String, default: "#" },
  linkText: { type: String, default: "CLIQUE AQUI" },
  bgColor: { type: String, default: "bg-[#FFCCB3]" },
  iconColor: { type: String, default: "text-[#FF884D]" },
  linkColor: { type: String, default: "text-[#FF884D]" },
  iconPath: { type: String, default: "M12 16l-6-6h12z" }, // Ícone padrão
});

// Refs para animação
const container = ref(null);
const iconBox = ref(null);
const icon = ref(null);
const link = ref(null);

onMounted(() => {
  // Animação de entrada do container (fade-in + escala)
  gsap.fromTo(
    container.value,
    { opacity: 0, scale: 0.8, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  // Animação de entrada do ícone (escala + rotação)
  gsap.fromTo(
    iconBox.value,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: "power2.out" }
  );

  // Animação de entrada do ícone (rotação)
  gsap.fromTo(
    icon.value,
    { rotate: -45, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" }
  );

  // Animação do link com delay e cor ao passar o mouse
  gsap.fromTo(
    link.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
  );

  // Efeito hover no ícone (escala e rotação)
  iconBox.value.addEventListener("mouseenter", () => {
    gsap.to(iconBox.value, { scale: 1.1, duration: 0.3 });
  });

  iconBox.value.addEventListener("mouseleave", () => {
    gsap.to(iconBox.value, { scale: 1, duration: 0.3 });
  });

  // Efeito hover no link (muda a cor)
  link.value.addEventListener("mouseenter", () => {
    gsap.to(link.value, { color: "#FF5722", duration: 0.3 });
  });

  link.value.addEventListener("mouseleave", () => {
    gsap.to(link.value, { color: "#FF884D", duration: 0.3 });
  });
});
</script>

<style scoped>
/* Estilização adicional para o hover do link */
a {
  transition: color 0.3s ease-in-out;
}
</style>
