<template>
  <div ref="container" class="p-6 flex flex-col items-start">
    <h1 class="text-3xl font-bold text-gray-800 text-left">Pesquisa</h1>
    <p class="text-black text-2xl mt-2 text-left t">
      Usando o <span class="text-[#7349BD]">Google Forms</span>, montei uma
      <span class="text-[#FF6619]">pesquisa quantitativa</span>, a fim de
      comprovar ou desmistificar minhas certezas e me esclarecer sobre minhas
      suposições e minhas dúvidas.
    </p>
    <p class="text-[#FF6619] font-semibold mt-8 text-left">
      Total de 12 respostas
    </p>
    <div class="mt-8 w-full">
      <img src="/public/images/Datas.svg" class="mb-16 w-full h-auto" />
      <img src="/public/images/Datas2.svg" class="mb-16 w-full h-auto" />
      <img src="/public/images/Data3.svg" class="mb-16 w-full h-auto" />
      <img src="/public/images/Datas4.svg" class="mb-16 w-full h-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const container = ref(null);

onMounted(() => {
  if (!container.value) return; // Evita erro caso o elemento não exista

  gsap.fromTo(
    container.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
});
</script>
