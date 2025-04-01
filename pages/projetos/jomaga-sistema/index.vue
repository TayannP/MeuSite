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

    <Texto
      titlePart1="Declaração do"
      titlePart2="Problema"
      subtitle="Atualmente, nossa empresa enfrenta desafios significativos no gerenciamento de contratos, que estão impactando negativamente nossa eficiência operacional, conformidade legal e desempenho financeiro. O processo manual de criação, revisão e acompanhamento de contratos resulta em falta de organização, atrasos nas negociações, riscos de perda de informações e dificuldade em garantir conformidade com regulamentações. Além disso, a comunicação dispersa entre as partes interessadas muitas vezes leva a mal-entendidos e erros, prejudicando nossas relações comerciais e a reputação da empresa. Diante desses desafios, torna-se evidente a necessidade urgente de implementar um sistema de contratação moderno e eficiente para superar essas limitações e garantir uma gestão de contratos mais eficaz e transparente."
    />

    <Texto
      titlePart1="Solução"
      titlePart2="Possível"
      subtitle="Ao adquirir um sistema de contratos, a empresa pode beneficiar-se de várias maneiras. Aqui estão algumas possíveis soluções e vantagens que o sistema pode oferecer: 

      - Centralização de Dados: O sistema permite que todos os contratos e informações relacionadas sejam armazenados em um único local, facilitando o acesso e a organização dos dados.
      - Rastreamento de Alterações: Com recursos de rastreamento de alterações, o gestor pode monitorar todas as modificações feitas nos contratos ao longo do tempo, garantindo transparência e precisão nas informações.
      - Lembretes Automáticos: O sistema pode enviar lembretes automáticos sobre prazos importantes, como renovações de contrato e términos de serviços, ajudando o gestor a manter-se atualizado e evitar a perda de prazos.
      - Assinatura Eletrônica: A funcionalidade de assinatura eletrônica integrada simplifica e agiliza o processo de assinatura de contratos, economizando tempo e reduzindo a necessidade de papel.
      - Geração de Relatórios: O sistema pode gerar relatórios personalizados sobre diversos aspectos dos contratos, como status, desempenho e tendências, fornecendo insights valiosos para a tomada de decisões.
      - Segurança e Conformidade: Com recursos avançados de segurança e conformidade, o sistema protege os dados confidenciais e garante o cumprimento das regulamentações de privacidade e segurança de dados.
      - Eficiência Operacional: Ao automatizar tarefas e processos manuais, o sistema aumenta a eficiência operacional, permitindo que o gestor dedique mais tempo a atividades estratégicas e de maior valor agregado."
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
import Texto from "./texto.vue";
import subFooter from "~/components/fotter/subFooter";

definePageMeta({
  layout: "projetos",
});
</script>
