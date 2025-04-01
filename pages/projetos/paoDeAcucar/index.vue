<template>
  <div>
    <titulo
      :title="'Bondinho Pão de Açucar'"
      :subtitle="'O Bondinho Pão de Açúcar confiou em nossa expertise para desenvolver um site institucional que traduzisse a grandiosidade de um dos principais cartões-postais do Brasil. Nosso trabalho envolveu desde a concepção visual até a implementação de soluções estratégicas para garantir uma experiência imersiva, intuitiva e de alta performance. Com um design moderno e funcional, o site proporciona navegação fluida, informações detalhadas e integração com sistemas de compra de ingressos, reforçando a conexão entre tecnologia e turismo..'"
      :buttonText="'Website Design'"
      :buttonSubText="'Development'"
    />

    <imagemAnimada
      imageUrl="/images/responsividade.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <imagemAnimada
      imageUrl="/images/sobre.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <imagemAnimada
      imageUrl="/images/processo.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <description />

    <imagemAnimada
      imageUrl="/images/Desk.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <imagemAnimada
      imageUrl="/images/Matriz.svg"
      altText="Projeto Bondinho Pão de Açucar"
    />

    <pesquisa />

    <imagemAnimada
      imageUrl="/images/Persona.svg"
      altText="Pesquisa - Persona"
    />

    <imagemAnimada
      imageUrl="/images/Style-guide-bondinho.svg"
      altText="Style Guide"
    />

    <subFooter
      message="Suporte disponível 24h!"
      iconPath="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      linkTexto
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import description from "./description.vue";
import pesquisa from "./pesquisa.vue";
import subFooter from "~/components/Fotter/subFooter.vue";

definePageMeta({
  layout: "projetos",
});
</script>
