<template>
  <div>
    <titulo
      :title="'As Vermelhinhas'"
      :subtitle="'Desenvolvi o aplicativo das bicicletas públicas vermelhinhas, promovendo mobilidade urbana gratuita e acessível pela cidade. Com uma interface intuitiva e design centrado no usuário, o app facilita a localização de estações, o uso das bikes e a integração com outros meios de transporte. A experiência foi pensada para tornar o deslocamento diário mais prático, sustentável e eficiente.'"
      :buttonText="'UI / UX'"
      :buttonSubText="'App Mobile'"
    />

    <imagemAnimada imageUrl="/images/cover (4) 1.svg" altText="Style Guide" />

    <infoProjeto
      title1="Visão Geral"
      subtitle1="Atuei no redesign do aplicativo
    das bicicletas públicas vermelhinhas, com foco em melhorar a experiência do
    usuário na mobilidade urbana gratuita. Usei o app por mais de um mês para
    mapear pontos de fricção e compreender o fluxo real de uso. Além disso,
    analisei avaliações de usuários nas lojas de aplicativos para identificar
    dores e oportunidades de melhoria. O novo design oferece uma navegação mais
    fluida, facilita a localização de estações e reforça a proposta de
    acessibilidade e integração com outros modais da cidade."
      imageSrc="/images/Mockup 8 2 (2).svg"
      titleColor="text-[#BA181B]"
      subtitleColor="text-gray-600"
      secondTitleColor="text-[#BA181B]"
    />

    <meuPapel
      title="Meu papel e contribuição"
      subtitle="Minha função neste projeto como Designer de UI/UX é redesenhar/renovar o fluxo das Bikes Vermelhinhas. Minha responsabilidade começa no estágio de empatia para pesquisa até a iteração com base na validação. Portanto, a saída que darei na forma não apenas de uma interface atualizada, mas também de uma melhor experiência do recurso."
      titleColor="text-[#BA181B]"
      subtitleColor="text-gray-500"
    />

    <infoProjeto
      title1="Research"
      subtitle1="Atuei no redesign do aplicativo das bicicletas públicas vermelhinhas, com foco em melhorar a experiência do usuário na mobilidade urbana gratuita. Usei o app por mais de um mês para mapear pontos de fricção e compreender o fluxo real de uso. Além disso, analisei avaliações de usuários nas lojas de aplicativos para identificar dores e oportunidades de melhoria. O novo design oferece uma navegação mais fluida, facilita a localização de estações e reforça a proposta de acessibilidade e integração com outros modais da cidade."
      title2="Alguns problemas comuns que encontrei"
      imageSrc="/images/pesquisa2.svg"
      titleColor="text-[#BA181B]"
      subtitleColor="text-gray-600"
      secondTitleColor="text-[#BA181B]"
    />

    <meuPapel
      title="Design Thinking Process"
      subtitle="Com tão pouco tempo, escolhi usar um método simples e eficaz. Decidi seguir esse processo de design para me permitir criar decisões com base nos insights, motivações e frustrações do usuário. Abaixo está a visualização do processo.."
      titleColor="text-[#BA181B]"
      subtitleColor="text-gray-500"
      imageSrc="/images/Design-thinking.svg"
      imageAlt="Equipe feliz no escritório"
    />

    <infoProjeto
      title1="Empatia"
      subtitle1="Teste de usabilidade e entrevista com o usuário. Para descobrir problemas e observar o comportamento do design existente através da perspectiva do usuário, convidei vários usuários e conduzi uma sessão de teste de usabilidade remota não moderada e uma sessão de entrevista com eles. Aqui estão alguns insights coletados dos usuários.
      Para obter alguns insights valiosos de pesquisa do usuário, comecei a entrevistar os usuários reais que estão utilizando as biciletas para andar pela cidade, ele surgiu com os pontos problemáticos categorizados."
      imageSrc="/images/foto empatia.svg"
      subtitleColor="text-gray-600"
    />

    <infoProjeto
      title1="Define"
      subtitle1="Os diagramas de afinidade ajudam você a organizar diferentes insights do usuário e encontrar pontos problemáticos em grupos de temas e assuntos semelhantes. A partir do diagrama de afinidade, consegui ver as informações que os usuários precisam para retirar a bicicleta, as frustrações dos usuários e algumas preferências para me ajudar a redesenhar o aplicativo para que fosse mais confortável de usar.Com base nos insights que reúno na fase de empatia, tento reformular as declarações de insights como perguntas do tipo Como Poderíamos para transformar esses desafios em oportunidades de design."
      imageSrc="/images/imagem Define (1).svg"
      subtitleColor="text-gray-600"
    />
    <imagemAnimada
      imageUrl="/images/Fluxo do usuario.svg"
      altText="Fluxo do usuario"
    />

    <meuPapel
      title="Ideate"
      subtitle="Esboço lo-fi.Esta é minha parte favorita! Depois de reunir vários insights, fazer brainstorming e priorizar ideias, este é o resultado final do wireframe lo-fi em que trabalhei."
      titleColor="text-[#BA181B]"
      subtitleColor="text-gray-500"
      imageSrc="/images/lo-fi.svg"
      imageAlt="Equipe feliz no escritório"
    />

    <imagemAnimada imageUrl="/images/type.svg" altText="Fluxo do usuario" />

    <infoProjeto
      title1="Protótipo"
      subtitle1="Depois que o wireframe está pronto, eu o transformei em um design de alta fidelidade e fiz um protótipo. Eu trabalho essa parte no Figma. Então, aqui está o resultado.
      -Insira a conta de luz
De quem é essa conta de luz?
Identifique se está conta de luz é verdadeira.
Lista se usuário é local ou turista.
Selecione a carteira de identidade
Verifique se está carteira de identidade é verdadeira.
Se o usuário for menor de idade, verificar se os dados do responsável é veritica.
Se o usuário for menor de idade, verificar se os dados do responsável é verídica"
      imageSrc="/images/tipos.svg"
      subtitleColor="text-gray-600"
    />

    <imagemAnimada
      imageUrl="/images/capa-bike.png"
      altText="Fluxo do usuario"
    />

    <subFooter
      message="Quer saber mais sobre o Projeto?"
      link="/contato"
      linkText="Entre em contato"
      bgColor="bg-[#BA181B]"
      iconColor="text-[#fff]"
      linkColor="text-[#FF5151]"
      hoverColor="#BA181B"
      iconPath="M5 13l4 4L19 7"
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import meuPapel from "./meuPapel";
import infoProjeto from "./infoProjeto";
import subFooter from "~/components/Fotter/subFooter.vue";

definePageMeta({
  layout: "projetos",
});
</script>
