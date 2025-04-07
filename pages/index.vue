<template>
  <div>
    <SectionPrincipal />

    <Title
      title="Websites exclusivos e sofisticados, projetados com personalização única e um impacto visual impressionante."
    />

    <InfoPRojeto
      title="Contribuí para a solução e aprimoramento do site <br /> oficial da Petrobras."
      buttonText="Ver esse Projeto"
      buttonLink="/projetos/petrobras"
      imageSrc="/images/petrobras-project.svg"
      imageAlt="Projeto Petrobras"
    />

    <Testemunhas
      avatarUrl="/images/avatar.svg"
      name="Roberta Alves"
      testimonial="As ideias foram excepcionais e demonstrou grande flexibilidade ao longo de todo o processo.  Foi uma experiência excelente trabalhar com o Tayan Peres."
      jobTitle="Project Manager na Prefeitura do Rio de Janeiro"
    />

    <Title
      title="Aplicativos intuitivos e envolventes,  onde cada toque, interação e emoção são cuidadosamente projetados para oferecer uma experiência única e agradável."
    />

    <Capa />

    <InfoPRojeto
      title="Map-e, Unindo UX, UI e visão estratégica de produto, atuo como Product Owner e PO shadow, garantindo experiências eficientes e alinhadas aos objetivos do negócio."
      buttonText="Ver esse Projeto"
      buttonLink="/projetos/petrobras"
      imageSrc="/images/Map-eCapa.svg"
      imageAlt="Projeto Petrobras"
    />

    <Testemunhas
      avatarUrl="/images/avatar2.svg"
      name="Luciano de Carvalho"
      testimonial="Totalmente comprometido, sempre buscando oferecer o melhor resultado possível <br /> para  cada projeto,   com dedicação e atenção a cada detalhe."
      jobTitle="Design Engineer Sênior na Petrobras"
    />

    <Title
      title="Sistemas de alto desempenho, criados para proporcionar experiências digitais envolventes que os usuários adoram interagir."
    />

    <imagemAnimada
      imageUrl="/images/capa-jomaga.svg"
      altText="Projeto Jomaga UX"
    />

    <Title
      title="Marcas impactantes, com posicionamento estratégico sólido e um design visualmente extraordinário que se destaca no mercado."
    />

    <Title
      title="Site do Bondinho do Pão de Açúcar é fundamental para oferecer informações e facilitar o planejamento da visita de turistas e moradores. Ele permite a compra antecipada de ingressos, o que ajuda a evitar filas e garante uma experiência mais organizada e etc."
    />

    <imagemAnimada
      imageUrl="/images/BONDINHO2.svg"
      altText="Projeto Jomaga UX"
    />

    <Testemunhas
      avatarUrl="/images/avatar-fernando.svg"
      name="Fernando Alves"
      testimonial="É rápido, ágel, inteligente e dedicado, sempre assegurando uma comunicação clara <br /> e eficaz   em todasas etapas do processo."
      jobTitle="Desenvolvedor Front-End na Jomaga"
    />
  </div>
</template>

<script setup>
import SectionPrincipal from "~/components/Info/sectionPrincipal.vue";
import Title from "~/components/Info/title.vue";
import InfoPRojeto from "~/components/projetos/infoPRojeto.vue";
import Capa from "~/components/projetos/Capa.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";

definePageMeta({
  layout: "default", // Especifica o layout alternativo]
});
useHead({
  title: "TayanP",
  meta: [
    {
      name: "description",
      content: "Meu site Profissional",
    },
  ],
});
</script>
