<template>
  <div class="flex flex-col items-center space-y-8">
    <titulo
      :title="'Jomaga Participações LTDA'"
      :subtitle="'Ajudei a desenvolver o site institucional da Jomaga, criando uma plataforma moderna e intuitiva para destacar os serviços da empresa. O projeto teve como foco aprimorar a experiência do usuário, garantindo uma navegação fluida e acessível. Além disso, trabalhei para fortalecer a presença digital da marca, transmitindo sua identidade e valores de forma clara e impactante.'"
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

    <Title
      title="Declaração de Problema"
      subtitle="A Jomaga enfrentava desafios com sua presença digital devido à ausência de um site institucional eficiente. A empresa não contava com uma plataforma que comunicasse de forma clara seus serviços, diferenciais e identidade, o que impactava negativamente na captação de novos clientes e na consolidação da marca no ambiente online. Além disso, a experiência do usuário era inexistente, dificultando o acesso rápido e intuitivo às informações e prejudicando a credibilidade da empresa no mercado digital."
    />

    <Processo
      mainTitle="O Processo"
      processoTitle="Identifique o problema"
      processoSubtitle="Identificamos os problemas que estão levando à incompletude dos objetivos comerciais e dos usuários."
    />

    <Title
      title="Quais são os objetivos do usuário?"
      subtitle="Encontre facilmente o que procura
      Entrar em contato Encontrar formas rápidas e diretas de falar com a empresa.
      Explorar oportunidades de parceria 
       Conhecer melhor a empresa e avaliar possíveis colaborações.
      Ver portfólio ou cases de sucesso 
      Avaliar a credibilidade da empresa por meio de trabalhos anteriores.
      Ter uma experiência de navegação fluida
      Acessar um site responsivo e bem estruturado."
    />

    <ObjetivosComerciais
      title="Como podemos ajudar os usuários a atingir objetivos junto com nossos objetivos comerciais?"
      ,
      titulo="Clientes"
      subtitle="Ele entende rapidamente o que a empresa faz e se é o que procura.
      Ter confiança suficiente para entrar em contato ou solicitar um orçamento.
      Otimizar a velocidade de carregamento para evitar abandonos.
      Oferecer múltiplos canais de contato, como WhatsApp, e-mail e telefone.
      Enviar notificações (como e-mails ou banners no site) informando mudanças e melhorias.
      Permitir que o usuário salve serviços ou informações importantes para fácil acesso.
      Manter o relacionamento com a empresa, Facilitar o contato e oferecer suporte eficiente.
      Oferecer um espaço para feedbacks, mostrando que a opinião do usuário é valorizada."
    />
    <imagemAnimada
      imageUrl="/images/System architecture (2).svg"
      altText="Projeto Jomaga Site"
    />
    <imagemAnimada
      imageUrl="/images/Low Fidelity Wireframes.svg"
      altText="Projeto Jomaga Site"
    />
    <imagemAnimada
      imageUrl="/images/Typography & Colors (1).svg"
      altText="Projeto Jomaga Site"
    />
    <imagemAnimada
      imageUrl="/images/Capa (1).svg"
      altText="Projeto Jomaga Site"
    />

    <subFooter
      message="Quer saber mais sobre o processo?"
      link="/contato"
      linkText="Entre em contato"
      bgColor="bg-[#E6F0FF]"
      iconColor="text-[#1E3A8A]"
      linkColor="text-[#1E3A8A]"
      hoverColor="#3B82F6"
      iconPath="M5 13l4 4L19 7"
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import description from "~/components/projetos/description.vue";
import Title from "./Title";
import Processo from "./Processo.vue";
import ObjetivosComerciais from "./ObjetivosComerciais.vue";
import subFooter from "~/components/Fotter/subFooter.vue";

definePageMeta({
  layout: "projetos",
});
</script>
