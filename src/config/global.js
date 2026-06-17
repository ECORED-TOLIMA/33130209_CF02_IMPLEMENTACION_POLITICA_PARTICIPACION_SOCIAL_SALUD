export default {
  global: {
    Name:
      'Implementación y fortalecimiento de la participación ciudadana en salud',
    Description:
      'Este componente aborda la gestión, implementación y fortalecimiento de estrategias de participación social en salud, enfocándose en la articulación de actores, el diseño de metodologías, la comunicación, la educación y el control social, con el fin de promover una participación efectiva en la toma de decisiones y en la garantía del derecho a la salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión de la participación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y alcance',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Coordinación y alianzas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metodologías de gestión',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de estrategias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fases de implementación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actores y escenarios de participación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mapa de actores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis e interpretación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Educación y comunicación para la participación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estrategias pedagógicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diseño metodológico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Población objetivo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias comunicativas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Piezas comunicativas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acciones y mecanismos de participación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Factores de éxito y debilidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Impacto',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ejes de participación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Implementación, gestión y control social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Diseño de estrategias',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Gestión de recursos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Seguimiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Toma de decisiones',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Control social',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Educación para la participación',
      significado:
        'Proceso formativo orientado a desarrollar capacidades en la ciudadanía para intervenir de manera informada, crítica y responsable en la gestión de la salud.',
    },
    {
      termino: 'Empoderamiento ciudadano',
      significado:
        'Proceso mediante el cual la ciudadanía fortalece sus capacidades para incidir en la toma de decisiones y ejercer sus derechos en salud.',
    },
    {
      termino: 'Estrategias en salud',
      significado:
        'Acciones planificadas que orientan la intervención de los actores en el territorio para fortalecer la participación y mejorar las condiciones de salud.',
    },
    {
      termino: 'Gestión de la participación',
      significado:
        'Conjunto de acciones orientadas a planificar, organizar y fortalecer los procesos participativos, mediante la articulación de actores, estrategias y recursos.',
    },
    {
      termino: 'Gestión de recursos',
      significado:
        'Proceso de organización y uso eficiente de recursos humanos, técnicos, logísticos y financieros para la implementación de estrategias participativas.',
    },
    {
      termino: 'Mapa de actores',
      significado:
        'Herramienta que permite identificar, analizar y comprender los actores involucrados en los procesos de participación, sus intereses, roles y niveles de influencia.',
    },
    {
      termino: 'Mecanismos de participación',
      significado:
        'Espacios e instancias que permiten la intervención de la ciudadanía en la gestión de la salud, como los COPACOS, las asociaciones de usuarios y las veedurías ciudadanas.',
    },
    {
      termino: 'Participación social en salud',
      significado:
        'Proceso mediante el cual la ciudadanía interviene de manera activa en la gestión de la salud, incluyendo la toma de decisiones, el seguimiento y la evaluación de acciones en el territorio.',
    },
    {
      termino: 'Piezas comunicativas',
      significado:
        'Herramientas utilizadas para transmitir información en salud de manera clara y accesible, como cartillas, afiches, infografías, videos y mensajes digitales.',
    },
    {
      termino: 'Procesos participativos',
      significado:
        'Dinámicas organizadas de interacción entre actores que facilitan la deliberación, la concertación y la toma de decisiones en salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1991). <em>Constitución Política de Colombia.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015 por medio de la cual se regula el derecho fundamental a la salud.</em>',
      link:
        'https://www.minsalud.gov.co/normatividad_nuevo/ley%201751%20de%202015.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2011). <em>Ley 1438 de 2011 por medio de la cual se reforma el Sistema General de Seguridad Social en Salud.</em>',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Resolución 2063 de 2017 por la cual se adopta la Política de Participación Social en Salud.</em>',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). <em>Política de Atención Integral en Salud (PAIS).</em>',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2018). <em>Participación social para la salud universal.</em>',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (2019). <em>Participación social en salud: marco conceptual y experiencias.</em>',
      link: '',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe (CEPAL). (2019). <em>Gestión pública orientada a resultados.</em>',
      link: '',
    },
    {
      referencia:
        'Klijn, E. H., & Koppenjan, J. (2016). <em>Governance networks in the public sector. Routledge.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
