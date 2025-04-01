<template>
  <footer ref="footer" class="bg-gray-800 text-white py-6 mt-8">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Texto à esquerda -->
      <div class="text-left">
        <p class="text-sm mt-2">
          Desenvolvido com ❤️ por Tayan Peres Soares - Todos os direitos
          reservados © 2025
        </p>
      </div>

      <!-- Ícones à direita -->
      <div class="flex space-x-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          class="text-2xl hover:text-[#0A66C2] transition-colors"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          class="text-2xl hover:text-[#333]"
          transition-colors
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
    { opacity: 0, y: 50 }, // Começa invisível e com deslocamento
    {
      opacity: 1,
      y: 0,
      duration: 1, // Duração da animação
      ease: "power2.out", // Tipo de suavização
      scrollTrigger: {
        trigger: footer.value,
        start: "top bottom", // A animação começa quando o topo do footer atinge o fundo da tela
        end: "bottom top", // A animação termina quando o fundo do footer chega ao topo da tela
        scrub: true, // Ativa o controle da animação com o scroll
      },
    }
  );
});
</script>

<style scoped>
footer {
  position: relative;
  background-color: #2d3748;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

footer .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer .text-left p {
  margin-bottom: 0.5rem;
}

footer a {
  transition: color 0.3s;
}

footer a:hover {
  color: #ff884d;
}

footer .fab {
  font-size: 1.5rem;
}
</style>
