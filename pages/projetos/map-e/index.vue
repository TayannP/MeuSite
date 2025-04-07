<template>
  <div class="flex flex-col items-center space-y-8">
    <titulo
      :title="'Sistema Map-e'"
      :subtitle="'O sistema Map-e da Petrobras é uma plataforma de mapeamento digital desenvolvida pelo Centro de Pesquisa e Inovação da companhia (Cenpes). Já foi utilizado para mapear cerca de 18.700 km² em regiões como Amazonas e Bahia, permitindo um melhor controle ambiental e operacional das atividades da Petrobras.'"
      :buttonText="'UI / UX'"
      :buttonSubText="'App Mobile'"
    />

    <imagemAnimada imageUrl="/images/capa-map-e.svg" altText="Capa do Map-e" />

    <description
      :firstText="'O Map-e foi desenvolvido para simplificar e otimizar o mapeamento e monitoramento ambiental, desde a coleta de dados geoespaciais até a análise detalhada de territórios. Com tecnologia avançada, o sistema utiliza algoritmos inteligentes para extrapolar informações, reduzindo a necessidade de levantamentos extensivos e tornando o processo mais ágil e econômico..'"
      :secondText="'A plataforma oferece recursos como visualização interativa de mapas, planejamento estratégico de rotas e monitoramento contínuo, permitindo uma gestão mais eficiente das áreas de operação. Com isso, o Map-e contribui para a sustentabilidade, a redução de custos e a tomada de decisões mais assertivas dentro da Petrobras.'"
      :buttonText="'Vesite o Website'"
      :websiteUrl="'https://jomaga.com.br'"
      :sector="'Tecnologia'"
      :location="'Rj, Brasil'"
      :stage="'Publicado'"
    />

    <infoProjeto
      title1="Entrevistas com usuários"
      subtitle1="Tínhamos  ideias, mas como poderíamos prová-la? Para isso, começamos a fazer entrevistas entre diferentes categorias de pessoas. Como Gerente, Gerente de Linhas e usuários de cada linha, Nessa abordagem, determinamos nosso valor para o entorno e então conhecemos as principais questões e desafios para nós dois."
      imageSrc="/images/entrevista1.svg"
      titleColor="text-[#DAA520]"
      subtitleColor="text-gray-600"
      secondTitleColor="text-[#BA181B]"
    />

    <infoProjeto
      title1="Encontrando Problemas"
      subtitle1="Tínhamos  ideias, mas como poderíamos prová-la? Para isso, começamos a fazer entrevistas entre diferentes categorias de pessoas. Como Gerente, Gerente de Linhas e usuários de cada linha, Nessa abordagem, determinamos nosso valor para o entorno e então conhecemos as principais questões e desafios para nós dois."
      imageSrc="/images/problemas.svg"
      titleColor="text-[#DAA520]"
      subtitleColor="text-gray-600"
      secondTitleColor="text-[#BA181B]"
    />

    <MeuPapel
      title="Sugestões e Melhorias"
      subtitle="Contribuí com melhorias no sistema, focando em otimizar sua eficiência, usabilidade e desempenho. Por questões de privacidade da empresa, não posso compartilhar muitos detalhes, mas aqui estão alguns exemplos das otimizações implementadas:"
      titleColor="text-[#DAA520]"
      subtitleColor="text-gray-500"
    />

    <imagemAnimada
      imageUrl="/images/exemplo-map.svg"
      altText="Informações Map-e"
    />

    <imagemAnimada
      imageUrl="/images/exemplo-map.svg"
      altText="Informações Map-e"
    />
    <imagemAnimada
      imageUrl="/images/exemplo-map2.svg"
      altText="Informações Map-e"
    />
    <imagemAnimada
      imageUrl="/images/exemplo-map3.svg"
      altText="Informações Map-e"
    />

    <infoProjeto
      title1="Testes A/B "
      subtitle1="TPara aprimorar a experiência de uso, conduzi testes A/B com diferentes abordagens de visualização no mapa, comparando a versão atual com uma nova proposta de interface. A versão B apresentou melhores resultados em engajamento, clareza e tempo de navegação, validando ajustes como ícones redesenhados, hierarquia visual mais clara e interações mais intuitivas. Essas decisões foram fundamentais para garantir uma navegação eficiente e alinhada às necessidades dos usuários técnicos e pesquisadores."
      imageSrc="/images/teste2.svg"
      titleColor="text-[#DAA520]"
      subtitleColor="text-gray-600"
      secondTitleColor="text-[#BA181B]"
    />
  </div>
</template>

<script setup>
import titulo from "~/components/projetos/titulo.vue";
import imagemAnimada from "~/components/projetos/imagemAnimada.vue";
import description from "~/components/projetos/description.vue";
import MeuPapel from "./MeuPapel";
import infoProjeto from "./infoProjeto";

definePageMeta({
  layout: "projetos",
});
</script>
