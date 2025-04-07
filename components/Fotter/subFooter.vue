<template>
  <div class="flex items-center justify-center mt-8">
    <div ref="container" class="flex items-center space-x-4">
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

      <div class="text-left">
        <p class="text-gray-800 text-lg font-semibold">{{ message }}</p>
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
  hoverColor: { type: String, default: "#FF5722" },
  iconPath: { type: String, default: "M12 16l-6-6h12z" },
});

const container = ref(null);
const iconBox = ref(null);
const icon = ref(null);
const link = ref(null);

onMounted(() => {
  gsap.fromTo(
    container.value,
    { opacity: 0, scale: 0.8, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 1 }
  );
  gsap.fromTo(
    iconBox.value,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, delay: 0.2 }
  );
  gsap.fromTo(
    icon.value,
    { rotate: -45, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 1, delay: 0.4 }
  );
  gsap.fromTo(
    link.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
  );

  iconBox.value.addEventListener("mouseenter", () => {
    gsap.to(iconBox.value, { scale: 1.1, duration: 0.3 });
  });
  iconBox.value.addEventListener("mouseleave", () => {
    gsap.to(iconBox.value, { scale: 1, duration: 0.3 });
  });

  link.value.addEventListener("mouseenter", () => {
    gsap.to(link.value, { color: hoverColor, duration: 0.3 });
  });
  link.value.addEventListener("mouseleave", () => {
    gsap.to(link.value, { color: linkColor, duration: 0.3 });
  });
});
</script>

<style scoped>
/* Estilização adicional para o hover do link */
a {
  transition: color 0.3s ease-in-out;
}
</style>
