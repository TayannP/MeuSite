<template>
  <div class="flex flex-col items-center space-y-8">
    <titulo
      :title="'Jomaga Participações LTDA'"
      :subtitle="'Ajudei a desenvolver o site institucional para a Jomaga, focado em apresentar os serviços da empresa, melhorar a experiência do usuário e fortalecer a presença digital da marca.'"
      :buttonText="'Website Design'"
      :buttonSubText="'Development'"
    />

    <imagemAnimada
      imageUrl="/images/jomaga-site.svg"
      altText="Projeto Jomaga Site"
    />

    <description
      :firstText="'A Jomaga contou com a nossa expertise para desenvolver seu site institucional, garantindo uma presença digital robusta e alinhada à sua identidade. Nosso trabalho envolveu desde a concepção e estruturação até a implementação de soluções estratégicas para melhorar a experiência do usuário e a performance da plataforma.'"
      :secondText="'Nosso compromisso foi traduzir a visão da empresa em um ambiente digital intuitivo e eficiente. Através da combinação de design moderno, responsividade e otimização de performance, ajudamos a Jomaga a fortalecer sua marca no cenário online e a oferecer uma navegação fluida e envolvente para seus clientes..'"
      :buttonText="'Vesite o Website'"
      :websiteUrl="'https://jomaga.com.br'"
      :sector="'Tecnologia'"
      :location="'Rj, Brasil'"
      :stage="'Em Desenvolvimento'"
    />

    <certificacoes />

    <imagemAnimada
      imageUrl="/images/clientes-jomaga.svg"
      altText="Projeto Jomaga Site"
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import description from "~/components/projetos/description.vue";
import certificacoes from "./certificacoes.vue";

definePageMeta({
  layout: "projetos",
});
</script>
