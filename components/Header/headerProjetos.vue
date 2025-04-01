<template>
  <nav class="bg-white fixed top-0 left-0 w-full z-50 shadow-lg">
    <div class="mx-auto px-2 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            src="/images/logo projetos.svg"
            alt="Logo do site"
            width="92"
            height="92"
          />
        </NuxtLink>
      </div>

      <!-- Links de Navegação (Desktop) -->
      <div class="hidden md:flex space-x-8">
        <NuxtLink to="/" class="text-black text-1xl hover:text-sky-300"
          >Sobre mim</NuxtLink
        >
        <NuxtLink to="/projetos" class="text-black text-1xl hover:text-sky-300"
          >Projetos</NuxtLink
        >
        <NuxtLink to="/" class="text-black text-1xl hover:text-sky-300"
          >Carreira</NuxtLink
        >
      </div>

      <!-- Botão de Vamos Conversar (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <button
          class="text-black text-2xl px-6 py-2 hover:bg-gradient-to-r from-white via-gray-500 to-gray-800 text-black rounded-md text-lg font-large hover:opacity-80 transition-all duration-300 transition"
        >
          Vamos Conversar?
        </button>
      </div>

      <!-- Menu Hambúrguer (Mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white hover:text-blue-400 focus:outline-none"
      >
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>
    </div>

    <!-- Menu Deslizante (Mobile) -->
    <div
      ref="menuRef"
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="md:hidden p-6 absolute top-0 left-0 w-full shadow-md bg-stone-950 transform transition-all duration-500"
      style="height: 100vh"
    >
      <!-- Ícone de X para fechar o menu -->
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 text-2xl text-white hover:text-blue-400"
      >
        &times;
      </button>

      <!-- Links Centralizados no Menu (Mobile) -->
      <div class="flex flex-col justify-center items-center h-full space-y-6">
        <NuxtLink to="/" class="text-white hover:text-gray-900 text-xl"
          >Sobre mim</NuxtLink
        >
        <NuxtLink to="/projetos" class="text-white hover:text-gray-900 text-xl"
          >Projetos</NuxtLink
        >
        <NuxtLink to="/" class="text-white hover:text-gray-900 text-xl"
          >Carreira</NuxtLink
        >

        <!-- Botão de Vamos Conversar (Mobile) -->
        <button
          class="text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mt-6"
        >
          Vamos Conversar?
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { useNuxtApp } from "#app";

const isMenuOpen = ref(false);
const menuRef = ref(null);

// Alternar o estado do menu e adicionar animação
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  if (menuRef.value) {
    if (isMenuOpen.value) {
      // Abrir o menu (deslizar de cima para baixo)
      gsap.to(menuRef.value, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      });
    } else {
      // Fechar o menu (deslizar para cima)
      gsap.to(menuRef.value, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }
};
</script>
