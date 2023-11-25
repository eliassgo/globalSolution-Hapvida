import Send from '@/app/transmissible-disease/components/Icons/Send';
import Shield from '@/app/transmissible-disease/components/Icons/Shield';
import Star from '@/app/transmissible-disease/components/Icons/Star';

import facebook from '~/images/transmissible-disease/facebook.png';
import hapvida from '~/images/transmissible-disease/hapvida.png';
import instagram from '~/images/transmissible-disease/instagram.png';
import linkedin from '~/images/transmissible-disease/linkedin.png';
import notreDame from '~/images/transmissible-disease/NotreDameIntermedica.png';
import people01 from '~/images/transmissible-disease/people01.png';
import people02 from '~/images/transmissible-disease/people02.png';
import people03 from '~/images/transmissible-disease/people03.png';
import twitter from '~/images/transmissible-disease/twitter.png';

// import {
//   people01,
//   people02,
//   people03,
//   facebook,
//   instagram,
//   linkedin,
//   twitter,
//   send,
//   shield,
//   star,
//   hapvida,
//   notreDame,
// } from "../../../../public/images/transmissible-disease";

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: Star,
    title: 'Morbidade e Mortalidade',
    content:
      'Doenças transmissíveis são uma das principais causas de morbidade (doenças) e mortalidade (morte) global. Elas contribuem para um grande número de casos clínicos e, em alguns casos, podem resultar em complicações sérias e até mesmo em óbito.',
  },
  {
    id: 'feature-2',
    icon: Shield,
    title: 'Emergências de Saúde Pública',
    content:
      'Surto de doenças transmissíveis pode se transformar em emergências de saúde pública, exigindo respostas rápidas e eficazes para conter a propagação da doença. Exemplos recentes incluem a pandemia de COVID-19.',
  },
  {
    id: 'feature-3',
    icon: Send,
    title: 'Desigualdades em Saúde',
    content:
      'As doenças transmissíveis muitas vezes exacerbam as desigualdades em saúde, afetando de maneira desproporcional comunidades vulneráveis e economicamente desfavorecidas. A falta de acesso a serviços de saúde adequados pode intensificar essas disparidades.',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'A prevenção é essencial para reduzir o impacto das doenças transmissíveis. Devemos investir em sistemas de saúde resilientes e promover a equidade no acesso aos cuidados de saúde.',
    name: 'Dr. Tedros Adhanom Ghebreyesus',
    title: 'Diretor-Geral da OMS',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      'A prevenção de doenças transmissíveis é um investimento essencial para o bem-estar global. Vacinação, educação e acesso a cuidados de saúde são fundamentais para proteger comunidades em todo o mundo.',
    name: 'Bill Gates',
    title: 'Cofundador da Microsoft e Filantropo',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'A prevenção de doenças transmissíveis não é apenas uma responsabilidade dos profissionais de saúde, mas de toda a sociedade. Devemos abordar as desigualdades sociais para alcançar uma prevenção eficaz.',
    name: 'Dr. Paul Farmer',
    title: 'Médico e Antropólogo de Saúde Global',
    img: people03,
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'MORTES EVITADAS',
    value: '2.4M',
    subCategory: [
      {
        title: 'Importância da Vacinação',
        description:
          'Destaca a crucial eficácia da vacinação na prevenção de doenças transmissíveis, enfocando os benefícios individuais e coletivos na contenção da propagação de agentes infecciosos',
        href: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
        url: 'https://cdn.discordapp.com/attachments/778783378593677333/1177674235934679040/image.png',
      },
      {
        title: 'Cronograma de Vacinação',
        description:
          'Informações sobre os cronogramas recomendados de vacinação para diferentes faixas etárias, destacando a importância de doses específicas em momentos-chave da vida para garantir imunidade adequada.',
        href: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
      },
      {
        title: 'Doenças Preveníveis por Vacinação',
        description:
          'Informações listadas e detalhadas algumas das principais doenças transmissíveis preveníveis por vacinação. Fornece informações sobre como as vacinas contribuíram para a redução significativa de casos dessas doenças.',
        href: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
      },
      {
        title: 'Mitigação de Surto',
        description:
          'Como campanhas de vacinação em massa têm sido eficazes na contenção de surtos e epidemias, demonstrando casos históricos em que a vacinação teve impacto significativo na mitigação de doenças infecciosas.',
        href: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
      },
    ],
  },
  {
    id: 'stats-2',
    title: 'Infecções respiratorias',
    value: '1B',
    subCategory: [
      {
        title: 'Causas e Agentes Causadores',
        description:
          'Principais causas de infecções respiratórias agudas, identificando os agentes patogênicos mais comuns, como vírus da gripe, rinovírus e vírus sincicial respiratório.',
        href: 'https://www.cdc.gov/ncird/rhinoviruses-common-cold.html',
        url: 'https://cdn.discordapp.com/attachments/778783378593677333/1177676675610312795/image.png',
      },
      {
        title: 'Higiene Respiratória e Etiqueta da Tosse',
        description:
          'Importância da higiene respiratória, incluindo práticas como cobrir a boca ao tossir e espirrar, para evitar a propagação de gotículas contaminadas que podem transmitir infecções.',
        href: 'https://www.emro.who.int/world-antibiotic-awareness-week/2019/index.html',
      },
      {
        title: 'Medidas Preventivas em Ambientes Coletivos',
        description:
          'Estratégias para prevenir infecções respiratórias em ambientes coletivos, como escolas e locais de trabalho, incluindo ventilação adequada, distanciamento social e uso de máscaras.',
        href: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-IPC-2021.1',
      },
      {
        title: 'Conscientização e Educação Pública',
        description:
          'Importância da conscientização pública sobre práticas preventivas para infecções respiratórias agudas. Explora campanhas educativas para informar sobre sintomas, métodos de prevenção e busca por atendimento médico adequado.',
        href: 'https://www.nice.org.uk/guidance/ng120',
      },
    ],
  },
  {
    id: 'stats-3',
    title: 'AFETADOS POR MALARIA',
    value: '229M',
    subCategory: [
      {
        title: 'Métodos de Prevenção de Picadas de Mosquito',
        description:
          'Estratégias para evitar picadas de mosquitos, incluindo o uso de repelentes, roupas de manga longa e redes mosquiteiras tratadas com inseticida.',
        href: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/immunization-analysis-and-insights/global-monitoring/data-statistics-and-graphics',
        url: 'https://cdn.discordapp.com/attachments/778783378593677333/1177693584787521636/image.png',
      },
      {
        title: 'Quimioprofilaxia',
        description:
          'Administração de medicamentos antimaláricos como uma medida preventiva, particularmente para pessoas que vivem ou viajam para áreas endêmicas.',
        href: 'https://www.cdc.gov/malaria/diagnosis_treatment/clinicians1.html#:~:text=The%20preferred%20antimalarial%20for%20interim,not%20adequate%20for%20interim%20treatment.',
      },
      {
        title: 'Controle de Vetores',
        description:
          'Iniciativas para controlar a população de mosquitos transmissores da malária, incluindo o uso de inseticidas, drenagem de áreas propícias à reprodução e o desenvolvimento de mosquitos geneticamente modificados.',
        href: 'https://www.cdc.gov/malaria/malaria_worldwide/reduction/vector_control.html',
      },
      {
        title: 'Conscientização e Educação da Comunidade',
        description:
          'Destaca a importância de programas educativos para informar comunidades sobre os sintomas da malária, métodos de prevenção e a busca por tratamento adequado.',
        href: 'https://reliefweb.int/report/nigeria/advocacy-communication-and-social-mobilization-strategic-framework-and-implementation',
      },
    ],
  },
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: hapvida,
  },
  {
    id: 'client-2',
    logo: notreDame,
  },
];
