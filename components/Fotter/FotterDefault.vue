<template>
  <footer ref="footer" class="bg-gray-800 text-white py-4 mt-24">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left"
    >
      <!-- Texto centralizado -->
      <h1 class="text-1xl">
        Desenvolvido por ❤️ <strong>Tayan Peres Soares</strong> — Todos os
        direitos reservados © 2025
      </h1>

      <!-- Ícones de redes sociais -->
      <div class="flex space-x-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-2xl hover:text-[#2A88F5] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-2xl hover:text-blue-500 transition-colors duration-300"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footer = ref(null);

onMounted(() => {
  gsap.fromTo(
    footer.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
</script>

<style scoped>
footer .fab {
  font-size: 1.75rem;
}
</style>
