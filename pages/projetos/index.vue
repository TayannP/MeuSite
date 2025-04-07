<template>
  <div>
    <HeroSection
      titleFirst="Inspiro empresas "
      titleMiddle="a alcançar o "
      titleHighlight="extraordinário"
      titleEnd="e construir um futuro marcante"
      subtitle="Projetos inovadores que vão além do convencional, criando conexões inteligentes e soluções impactantes."
    />
    <br />

    <ImageSlider
      :sliderImages="[
        { src: 'Santa-teresa.svg', alt: 'Map-e', link: '/projetos/map-e' },
        {
          src: 'jomaga-ux.svg',
          alt: 'Jomaga',
          link: '/projetos/jomaga-sistema',
        },
        {
          src: 'bicicleta.svg',
          alt: 'Vermelhinhas',
          link: '/projetos/vermelhinhas',
        },
        { src: 'Frame 4 1.svg', alt: 'Detran', link: '/projetos/detran' },
      ]"
    />

    <ImageLink
      imageSrc1="/Card-jomaga.svg"
      imageAlt1="Infomações Jomaga"
      :link1="'/projetos/jomaga-site'"
      imageSrc2="/Card-petrobras.svg"
      imageAlt2="Informações Petrobras"
      :link2="'/projetos/petrobras'"
    />

    <Testemunhas
      avatarUrl="/images/testemunha.svg"
      name="Alberto Ribeiro"
      testimonial="Seu trabalho é impecável, sempre trazendo soluções criativas e eficientes. A atenção aos detalhes e a dedicação são evidentes em cada projeto que você entrega."
      jobTitle="FullStack Sênior e Product Owner  na empresa Norte Americana."
    />

    <ImageLink
      imageSrc1="/Card-bondinho.svg"
      imageAlt1="Infomações Jomaga"
      :link1="'/projetos/paodeAcucar'"
      imageSrc2="/Card-blog.svg"
      imageAlt2="Informações do Blog"
      :link2="'/projetos/jomaga'"
    />

    <ImageLink
      imageSrc1="/Card-apartamentIK.svg"
      imageAlt1="Infomações Jomaga"
      :link1="'/projetos/jomaga'"
      imageSrc2="/Card-medic.svg"
      imageAlt2="Informações sobre app MedConnect"
      :link2="'/projetos/jomaga'"
    />

    <Testemunhas
      avatarUrl="/images/testemunha2.svg"
      name="Adriana Tavares"
      testimonial="Altamente talentoso e comprometido, entrega soluções inovadoras com precisão e criatividade. Sua expertise transforma ideias em experiências visuais incríveis, sempre superando expectativas."
      jobTitle="FullStack Sênior na Prefeitura de São Paulo"
    />

    <ImageLink
      imageSrc1="/Card-vermelhinhas.svg"
      imageAlt1="Infomações do App Vermelhinhas"
      :link1="'/projetos/jomaga'"
      imageSrc2="/Card-borabora.svg"
      imageAlt2="Informações do Blog"
      :link2="'/projetos/jomaga'"
    />

    <ImageLink
      imageSrc1="/Card-map-e.svg"
      imageAlt1="Infomações do Sistema Map-e"
      :link1="'/projetos/map-e'"
      imageSrc2="/Card-MariFood.svg"
      imageAlt2="Informações do Blog"
      :link2="'/projetos/jomaga'"
    />

    <Testemunhas
      avatarUrl="/images/avatar3.svg"
      name="Caio Martins"
      testimonial="Altamente talentoso e comprometido, entrega soluções inovadoras com precisão e criatividade. Sua expertise transforma ideias em experiências visuais incríveis, sempre superando expectativas."
      jobTitle="Front-End Pleno na Prefeitura de São Paulo"
    />
  </div>
</template>

<script setup>
import HeroSection from "./HeroSection.vue";
import ImageSlider from "./ImageSlider.vue";
import ImageLink from "~/components/projetos/ImageLink.vue";

definePageMeta({
  layout: "default", // Especifica o layout alternativo
});
</script>
