<template>
  <div>
    <titulo
      :title="'Jomaga Participações LTDA'"
      :subtitle="'Um produto que utiliza caminhos para melhor gerenciar seus contratos ao longo dos anos. Ele permite o registro e o armazenamento de dados essenciais, como nome, sobrenome, cargo, departamento, informações de contato, benefícios, treinamentos e avaliações de desempenho.  Além disso, o sistema pode incluir recursos para controle de presença, gestão de folha de pagamento, comunicação interna e desenvolvimento profissional. Ao oferecer uma visão abrangente e organizada dos funcionários, o sistema facilita a administração de recursos humanos, promove a transparência e a eficiência, e contribui para a satisfação e engajamento da equipe.'"
      :buttonText="'Website Design'"
      :buttonSubText="'Development'"
    />
    <imagemAnimada
      imageUrl="/images/cover-sistema-jomaga.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <imagemAnimada
      imageUrl="/images/Publico-alvo.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Design-process.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Linha-tempo.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Minha-funcao.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/User-research.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Entrevistas.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Define1.svg"
      altText="Pesquisa de Publico Alvo"
    />

    <imagemAnimada
      imageUrl="/images/Mapa-jornada.svg"
      altText="Pesquisa de Publico Alvo"
    />
    <subFooter
      message="Suporte disponível 24h!"
      bgColor="bg-blue-200"
      iconColor="text-blue-600"
      linkColor="text-blue-500"
      iconPath="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      linkTexto
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import subFooter from "~/components/fotter/subFooter";

definePageMeta({
  layout: "projetos",
});
</script>
