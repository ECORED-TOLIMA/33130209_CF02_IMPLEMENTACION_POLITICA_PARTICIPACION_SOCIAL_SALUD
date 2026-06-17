<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Gestión de la participación en salud
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de la participación en salud se configura como un proceso sistemático orientado a planificar, organizar y dinamizar la intervención de la ciudadanía en los asuntos relacionados con el sistema de salud. Este proceso implica estructurar mecanismos y estrategias que permitan la interacción efectiva entre la comunidad, las organizaciones sociales y las instituciones, con el fin de incidir en la toma de decisiones y en la gestión de los servicios de salud (Ministerio de Salud y Protección Social, 2017).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 Desde esta perspectiva, la gestión trasciende la promoción de la participación como un ejercicio aislado, para consolidarse como una función estratégica que articula actores, recursos y metodologías en contextos territoriales específicos. Su desarrollo requiere la identificación de necesidades, la priorización de problemáticas y la construcción de respuestas colectivas, garantizando condiciones para una participación informada, organizada y con capacidad de incidencia.
    p.mb-4 La gestión de la participación en salud fortalece la relación entre la ciudadanía, las instituciones y las organizaciones sociales. Su propósito es organizar procesos participativos que permitan tomar decisiones más transparentes, pertinentes y orientadas a las necesidades reales de la población. Para comprender su aporte, se destacan los siguientes aspectos:
    SlyderF.mb-4(columnas="col-lg-6 col-xl-4 ")
      .tarjeta.BG04.bg1.p-4(v-for="item in aportes" :key="item.titulo").h-100
        .row.justify-content-center.mb-3
          .col-6
            img(:src="item.figure" :alt="item.titulo")
        h5.text-center {{ item.titulo }}
        p.text-center {{ item.texto }}
        br
        br
        br
        br
    .row.justify-content-center.align-items-center
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img7.png", alt="Ilustración de personas participando en una reunión comunitaria")
      .col-lg-7
        .row.justify-content-center.mb-2
          .col-lg-auto.d-none.d-lg-block  
            img(src='@/assets/curso/temas/tema1/img8.svg', alt='')
          .col-lg-9
            p.mb-0 En conjunto, estos aspectos permiten comprender que la gestión de la participación en salud no se limita a convocar a la ciudadanía, sino que busca fortalecer su capacidad de incidencia en los procesos de planeación, seguimiento y mejora del sistema de salud.
        .cajon.color-primario.p-4
          p.mb-0 A partir de esta comprensión general, resulta necesario profundizar en el concepto y alcance de la gestión de la participación en salud, con el fin de reconocer cómo se organiza, qué actores intervienen y cuáles son sus posibilidades de aplicación en los territorios.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto y alcance
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión de la participación en salud comprende el conjunto de acciones orientadas a planificar, coordinar y evaluar los procesos mediante los cuales la ciudadanía interviene en el sistema de salud. Su alcance involucra la organización de actores, la definición de estrategias y la implementación de mecanismos que posibiliten la incidencia en la toma de decisiones.
    p.mb-4 Este enfoque reconoce que la intervención ciudadana trasciende la asistencia a espacios formales, al incorporar la capacidad de las comunidades para analizar problemáticas, proponer alternativas y realizar seguimiento a las acciones en salud. La gestión participativa se desarrolla en distintos niveles que articulan las dinámicas comunitarias con la gestión institucional y territorial. Para comprender su aplicación, se presentan a continuación los niveles que la estructuran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(:titulo="nivel.titulo")(v-for="nivel in niveles" :key="nivel.titulo")
            .col
              p.mb-0 {{ nivel.texto }}
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La comprensión de estos niveles permite reconocer que la gestión de la participación en salud integra diferentes ámbitos que interactúan de manera complementaria. Esta articulación facilita la coordinación entre actores, fortalece los procesos participativos y permite una mayor incidencia en la planificación y gestión del sistema.
    p.mb-0 Con el propósito de profundizar en la dirección que orientan estos procesos, a continuación, se abordan los objetivos que guían la gestión de la participación en salud.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Objetivos
    figure.mb-4
      img(src='@/assets/curso/temas/tema1/img11.png', alt='Ilustración de una persona señalando una pizarra con objetivos escritos')
    p Los objetivos de la gestión de la participación en salud orientan la estructuración de los procesos participativos hacia resultados que permitan la incidencia efectiva de la ciudadanía en la gestión del sistema de salud. En esta línea, no se limitan a promover la intervención comunitaria, sino que buscan consolidar condiciones para una participación informada, articulada y con capacidad de influir en la toma de decisiones en los diferentes niveles del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Bajo este enfoque, los objetivos se dirigen al fortalecimiento de capacidades ciudadanas, la generación de espacios de concertación y la construcción de soluciones colectivas frente a las necesidades en salud, en coherencia con los lineamientos de la Política de Participación Social en Salud (Ministerio de Salud y Protección Social, 2017).
    p A partir de estos elementos, se presentan a continuación los objetivos que orientan la gestión de la participación en salud:
    .BG02.p-5
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img12.png", alt="alt").img400.m-auto
        .col-lg-8
          SlyderF.custom.mb-4(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--blanca.p-4(v-for="objetivo in objetivos" :key="objetivo.texto")
              .row.justify-content-center.mb-3
                .col-5
                  img(:src="objetivo.figure", alt="alt").img100.m-auto
              p.text-center.mb-0 {{ objetivo.texto }}
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 En conjunto, estos objetivos permiten estructurar procesos participativos más organizados, pertinentes y orientados a resultados, en los que la ciudadanía no solo interviene, sino que incide de manera efectiva en la gestión del sistema de salud. Para lograr este propósito, resulta fundamental fortalecer los mecanismos de articulación entre los diferentes actores, a través de procesos de coordinación y construcción de alianzas que faciliten el trabajo conjunto y la sostenibilidad de la participación en los territorios.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Coordinación y alianzas
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema1/img18.png", alt="Ilustración de personas colaborando en una reunión de trabajo")
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La coordinación y las alianzas en la gestión de la participación en salud constituyen componentes estratégicos para la integración de actores, recursos y capacidades en el desarrollo de procesos participativos. Su propósito radica en facilitar la acción conjunta entre instituciones, organizaciones sociales y comunidad, promoviendo la coherencia en la planificación y ejecución de acciones orientadas al fortalecimiento del derecho a la salud.
        p.mb-0 En términos operativos, la coordinación implica la organización de acciones entre actores con responsabilidades diferenciadas, asegurando complementariedad, continuidad y alineación con los objetivos definidos. Esto requiere la definición de roles, el establecimiento de canales de comunicación y la generación de mecanismos que permitan el seguimiento de los compromisos adquiridos en los espacios participativos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 A diferencia de la coordinación, las alianzas se configuran como acuerdos de colaboración que pueden ser formales o informales, mediante los cuales los actores articulan intereses y recursos para potenciar el alcance de las acciones en salud. Estas relaciones favorecen la sostenibilidad de los procesos participativos, al ampliar las capacidades institucionales y comunitarias en los territorios.
    p.mb-4 Considerando estas dinámicas, la coordinación y las alianzas se materializan en distintos niveles de interacción que permiten comprender su aplicación en los contextos territoriales:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(v-for="forma in formas1" :key="forma.texto")
        .tarjeta-avatar
          img(:src="forma.figure", alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h4.text-center {{ forma.titulo }}
              p.mb-0.text-center {{ forma.texto }}
    p.mb-4 La coordinación y las alianzas en la gestión de la participación en salud permiten integrar actores, recursos y capacidades para desarrollar procesos participativos más organizados. Su propósito es facilitar la acción conjunta entre instituciones, sectores sociales, organizaciones comunitarias y ciudadanía, de manera que las acciones en salud sean coherentes, complementarias y orientadas al fortalecimiento del derecho a la salud.
    p.mb-4 Para comprender su aplicación, se presentan las siguientes formas de articulación:
    .BG03.px-5.p-5.mb-4
      .tarjeta.tarjeta--blanco.p-5
        PasosB.color-acento-contenido
          .row(titulo="")(v-for="forma in formas" :key="forma.titulo")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  :src="forma.figure",  alt="Imagen decorativa")
            .col-lg-7
              h5 {{ forma.titulo }}
              p.mb-4 {{ forma.texto }}
              p.mb-0 #[b Ejemplo:] {{ forma.ejemplo }}
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img25.svg', alt='')
          .col-lg-9
            p.mb-0 La interacción entre estos niveles fortalece las relaciones colaborativas y permite que la participación no dependa de acciones aisladas. Al integrar instituciones, sectores y comunidad, se consolidan redes de trabajo, se mejora la capacidad de respuesta frente a las problemáticas en salud y se favorece la continuidad de los procesos participativos en los territorios.
        .cajon.color-primario.p-4
          p.mb-0 Después de reconocer cómo se articulan los actores mediante la coordinación y las alianzas, es necesario identificar las metodologías que orientan la organización, el desarrollo y el seguimiento de los procesos participativos en salud. Estas metodologías permiten pasar de la articulación entre actores a la planificación de acciones concretas, pertinentes y sostenibles.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Metodologías de gestión
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p.mb-4 Las metodologías de gestión de la participación en salud comprenden el conjunto de enfoques, herramientas y técnicas que orientan la estructuración, dinamización y evaluación de los procesos participativos en los territorios. Su aplicación posibilita organizar la intervención de la ciudadanía con criterios claros, asegurando coherencia entre las necesidades identificadas, las acciones desarrolladas y los resultados esperados en la gestión del sistema de salud.
        .cajon.color-secundario.p-4
          p.mb-0 La incorporación de metodologías estructuradas supera prácticas aisladas o espontáneas, al establecer rutas de trabajo que integran a los actores, promueven el diálogo y favorecen la construcción colectiva de respuestas frente a las problemáticas en salud. Asimismo, contribuyen a garantizar la trazabilidad de los procesos, mediante mecanismos que permiten documentar, monitorear y evaluar las acciones implementadas.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/tema1/img26.png", alt="Ilustración de una persona utilizando una metodología de trabajo en grupo")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img27.svg', alt='')
      .col-lg-9
        p.mb-0 Bajo esta lógica, las metodologías se constituyen en instrumentos operativos que organizan la participación desde la identificación de necesidades hasta el seguimiento de las acciones, fortaleciendo la capacidad de incidencia de la comunidad en los procesos de decisión en salud.
    p.mb-4 Bajo esta lógica, las metodologías se constituyen en instrumentos operativos que organizan la participación desde la identificación de necesidades hasta el seguimiento de las acciones, fortaleciendo la capacidad de incidencia de la comunidad en los procesos de decisión en salud.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Principales metodologías de gestión de la participación en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
          table
            thead
              tr.encabezadotabla
                th Metodología
                th Descripción
                th Propósito
                th Aplicación en salud
            tbody
              tr(v-for="fila in metodologias" :key="fila.metodologia")
                td.text-bold {{ fila.metodologia }}
                td {{ fila.descripcion }}
                td {{ fila.proposito }}
                td {{ fila.aplicacion }}
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La tabla permite reconocer que cada metodología cumple una función específica dentro de la gestión de la participación en salud. El diagnóstico participativo ayuda a identificar necesidades; las mesas de diálogo facilitan acuerdos; los talleres fortalecen capacidades; el mapeo de actores permite reconocer relaciones e influencias; el seguimiento participativo verifica avances, y la planificación participativa organiza acciones con enfoque colectivo.
    p.mb-4 Además de reconocer las metodologías, es importante comprender los aportes que generan cuando se aplican de manera articulada en los territorios. Estos aportes permiten que la participación no se limite a reuniones o actividades aisladas, sino que se convierta en un proceso organizado, transparente y orientado a la solución de necesidades reales de la comunidad:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img28.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="proceso.titulo" v-for="(proceso, index) in proceso" :key="proceso.titulo")
            | {{ proceso.texto }}
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos aportes permiten comprender que las metodologías de gestión son herramientas prácticas para organizar la participación social en salud. Su valor pedagógico está en orientar el paso de la reflexión comunitaria a la acción planificada, con procesos más claros, corresponsables y ajustados a las realidades de cada territorio.
    p.mb-0 Una vez reconocidas las metodologías que orientan la organización de los procesos participativos, es necesario comprender cómo se definen las estrategias en salud. En Colombia, estas estrategias permiten establecer el propósito de la intervención, identificar los actores institucionales y comunitarios, y organizar líneas de trabajo que favorezcan la participación efectiva en municipios, departamentos y comunidades del país.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    aportes: [
      {
        figure: require('@/assets/curso/temas/tema1/img2.svg'),
        titulo: 'Gobernanza en salud',
        texto:
          'Favorece la coordinación entre instituciones y comunidad para orientar decisiones públicas más claras y responsables.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img3.svg'),
        titulo: 'Diálogo y concertación',
        texto:
          'Promueve espacios de encuentro para expresar necesidades, proponer soluciones y construir acuerdos colectivos.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img4.svg'),
        titulo: 'Control social',
        texto:
          'Permite que la ciudadanía realice seguimiento a la gestión pública, al uso de recursos y a los compromisos institucionales.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img5.svg'),
        titulo: 'Pertinencia de las decisiones',
        texto:
          'Contribuye a que las acciones en salud respondan a las condiciones, prioridades y realidades de cada comunidad.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img6.svg'),
        titulo: 'Equidad e inclusión',
        texto:
          'Impulsa procesos participativos que reconocen la diversidad y reducen barreras de acceso a la toma de decisiones.',
      },
    ],
    niveles: [
      {
        titulo: 'Nivel comunitario',
        texto:
          'Corresponde a la intervención directa de la ciudadanía y sus organizaciones en el territorio. En este nivel se identifican necesidades, se construyen propuestas y se realiza seguimiento a las acciones de salud con mayor cercanía a la realidad local. Permite que las decisiones reflejen las prioridades de quienes habitan el territorio. Ejemplo: una junta de acción comunal participa en la priorización de acciones del Plan Territorial de Salud de su municipio.',
      },
      {
        titulo: 'Nivel institucional',
        texto:
          'Hace referencia a la gestión que desarrollan las entidades del sector salud para facilitar, articular y sostener los procesos participativos. Este nivel define estrategias, asigna recursos y acompaña a los actores comunitarios en su intervención, garantizando condiciones adecuadas para la participación. Ejemplo: una secretaría de salud departamental diseña espacios de rendición de cuentas con organizaciones de usuarios del sistema.',
      },
      {
        titulo: 'Nivel territorial',
        texto:
          'Integra las dinámicas comunitarias e institucionales en el marco de la planeación y gestión pública. Este nivel permite articular la participación social con los planes de desarrollo, las políticas locales y los mecanismos de control social, favoreciendo decisiones pertinentes al contexto. Ejemplo: un consejo territorial de salud acuerda acciones entre instituciones y líderes para mejorar la atención en zonas rurales de difícil acceso.',
      },
    ],
    objetivos: [
      {
        figure: require('@/assets/curso/temas/tema1/img13.svg'),
        texto:
          'Fortalecer la capacidad de incidencia ciudadana, promoviendo la intervención activa de la comunidad en la identificación de necesidades, priorización de problemáticas y formulación de propuestas en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img14.svg'),
        texto:
          'Consolidar procesos de toma de decisiones participativas, mediante la generación de espacios de diálogo, concertación y construcción colectiva entre actores institucionales y comunitarios.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img15.svg'),
        texto:
          'Promover la articulación entre actores del sistema de salud, facilitando la coordinación interinstitucional, intersectorial y comunitaria para el desarrollo de acciones integradas en el territorio. ',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img16.svg'),
        texto:
          'Optimizar el uso de recursos en salud, a través de procesos participativos que permitan orientar las decisiones de manera transparente, pertinente y acorde con las necesidades de la población.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img17.svg'),
        texto:
          'Fortalecer el ejercicio del control social, garantizando que la ciudadanía participe en el seguimiento, evaluación y vigilancia de la gestión pública en salud.',
      },
    ],
    formas1: [
      {
        figure: require('@/assets/curso/temas/tema1/img19.svg'),
        titulo: 'Interinstitucional',
        texto:
          'Entre entidades del sector salud y otras instituciones públicas.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img20.svg'),
        titulo: 'Intersectorial',
        texto: 'Con sectores como educación, desarrollo social o ambiente.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img21.svg'),
        titulo: 'Comunitario',
        texto: 'Con organizaciones sociales, líderes y redes locales.',
      },
    ],
    formas: [
      {
        figure: require('@/assets/curso/temas/tema1/img22.png'),
        titulo: 'Coordinación interinstitucional',
        texto:
          'Organiza acciones entre entidades del sector salud y otras instituciones públicas, con responsabilidades diferenciadas. Permite evitar duplicidad de esfuerzos, mejorar el uso de los recursos y mantener continuidad en las acciones participativas.',
        ejemplo:
          'una secretaría de salud, una empresa social del Estado y una alcaldía municipal coordinan una jornada de atención y educación en salud para una zona rural.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img23.png'),
        titulo: 'Coordinación intersectorial',
        texto:
          'articula actores de diferentes sectores, como salud, educación, ambiente y desarrollo social, para responder a necesidades que afectan el bienestar de la población. Esta coordinación amplía la mirada sobre los problemas de salud y permite construir respuestas más integrales.',
        ejemplo:
          'los sectores de salud y educación desarrollan una estrategia conjunta para promover hábitos saludables y fortalecer la participación de familias y estudiantes en el territorio.',
      },
      {
        figure: require('@/assets/curso/temas/tema1/img24.png'),
        titulo: 'Alianzas comunitarias',
        texto:
          'corresponden a acuerdos de colaboración formales o informales entre instituciones, líderes, organizaciones sociales y ciudadanía. Estas alianzas articulan intereses y recursos para ampliar el alcance de las acciones en salud y favorecer la sostenibilidad de los procesos participativos.',
        ejemplo:
          'Euna asociación de usuarios, una junta de acción comunal y una institución de salud acuerdan realizar seguimiento a la calidad de la atención y presentar propuestas de mejora.',
      },
    ],
    metodologias: [
      {
        metodologia: 'Diagnóstico participativo',
        descripcion:
          'Identificación de necesidades, problemas y recursos con la comunidad.',
        proposito: 'Reconocer prioridades desde la perspectiva territorial.',
        aplicacion:
          'Identificación de problemáticas de salud y necesidades de la población.',
      },
      {
        metodologia: 'Mesas de diálogo',
        descripcion: 'Espacios estructurados de interacción entre actores.',
        proposito: 'Facilitar la concertación y toma de decisiones.',
        aplicacion: 'Construcción de acuerdos entre instituciones y comunidad.',
      },
      {
        metodologia: 'Talleres participativos',
        descripcion:
          'Actividades grupales que promueven la construcción colectiva.',
        proposito: 'Generar propuestas y fortalecer capacidades.',
        aplicacion: 'Diseño de acciones comunitarias en salud.',
      },
      {
        metodologia: 'Mapeo de actores',
        descripcion: 'Herramienta para identificar y analizar actores.',
        proposito: 'Reconocer relaciones, intereses y niveles de influencia.',
        aplicacion:
          'Identificación de actores clave para procesos participativos.',
      },
      {
        metodologia: 'Seguimiento participativo',
        descripcion: 'Evaluación conjunta de las acciones implementadas.',
        proposito: 'Fortalecer el control social y la transparencia.',
        aplicacion: 'Verificación del cumplimiento de acciones en salud.',
      },
      {
        metodologia: 'Planificación participativa',
        descripcion: 'Construcción conjunta de planes y estrategias.',
        proposito: 'Organizar acciones con enfoque colectivo.',
        aplicacion: 'Elaboración de planes territoriales en salud.',
      },
    ],
    proceso: [
      {
        titulo: 'Organización del proceso',
        texto:
          'Permite establecer pasos, responsables, tiempos y recursos para desarrollar acciones participativas de manera ordenada. Este aporte evita improvisaciones, facilita el seguimiento de compromisos y ayuda a que la participación tenga continuidad en los territorios.',
      },
      {
        titulo: 'Construcción colectiva',
        texto:
          'Favorece el diálogo entre comunidad, organizaciones sociales e instituciones para analizar necesidades, compartir saberes y proponer alternativas. Este proceso permite construir acuerdos pertinentes, basados en la realidad del territorio y orientados al bienestar de la población.',
      },
      {
        titulo: 'Seguimiento participativo',
        texto:
          'Permite verificar el cumplimiento de las acciones acordadas, revisar avances y reconocer oportunidades de mejora. Su aplicación fortalece el control social, la corresponsabilidad y la transparencia en la gestión de los procesos participativos en salud.',
      },
      {
        titulo: 'Transparencia en la gestión',
        texto:
          'Promueve el acceso a información clara, comprensible y oportuna sobre decisiones, recursos y resultados. Este aspecto fortalece la confianza entre actores y facilita que la ciudadanía participe de manera informada en el seguimiento institucional.',
      },
      {
        titulo: 'Pertinencia territorial',
        texto:
          'Permite adaptar las acciones participativas a las condiciones sociales, culturales, institucionales y geográficas de cada comunidad. Este aporte favorece respuestas más cercanas a las necesidades reales de la población y mejora la efectividad de las decisiones en salud.',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
