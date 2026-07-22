<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estrategias en salud
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')
          .col-lg-12
            p.mb-0 Las estrategias en salud, en el marco de la participación social, se entienden como orientaciones planificadas que definen el propósito, los actores involucrados y las líneas de acción para promover la incidencia de la ciudadanía en la gestión del sistema de salud. Su formulación permite direccionar los procesos participativos hacia objetivos concretos, en coherencia con las necesidades del territorio y los lineamientos establecidos en la Política de Participación Social en Salud (Ministerio de Salud y Protección Social, 2017).
    p.mb-4 En el contexto colombiano, estas estrategias permiten organizar la relación entre instituciones, sectores sociales, organizaciones comunitarias y ciudadanía. Su aplicación ayuda a que la participación no se limite a actividades aisladas, sino que se convierta en un proceso orientado, contextualizado y útil para responder a las necesidades de municipios, departamentos y comunidades.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.order-2.order-lg-1
          p.mb-4 Para comprender su función dentro de la participación social en salud, las estrategias permiten:
          ol.lista-ol--cuadro
            li(v-for="(funcion, index) in funciones" :key="funcion.titulo")
              .lista-ol--cuadro__vineta
                span {{ index + 1 }}
              | {{ funcion }}
          .cajon.color-primario.p-4
            p.mb-0 Estas funciones muestran que las estrategias en salud ayudan a ordenar la participación social y a darle sentido práctico dentro de la gestión pública. Su valor pedagógico está en mostrar cómo una necesidad identificada en el territorio puede transformarse en una acción organizada, concertada y evaluable.
        .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema2/img3.png', alt='')
    p.mb-4 En Colombia, las estrategias de participación social en salud deben responder a la diversidad territorial, institucional y poblacional del país. Por ello, su formulación requiere reconocer algunos elementos que orientan su aplicación en escenarios urbanos, rurales, dispersos y comunitarios:
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
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='')
            .col-lg-10
              p.mb-0 En conjunto, estos elementos permiten que las estrategias en salud sean claras, pertinentes y aplicables al contexto colombiano. Su adecuada formulación fortalece la participación social, mejora la coordinación entre actores y facilita decisiones más cercanas a las necesidades reales de la población.
        .row
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
          .col-lg-10
            p.mb-0 Desde esta perspectiva, el desarrollo de estrategias de participación en salud contribuye a organizar la acción colectiva, fortalecer la articulación interinstitucional e impulsar procesos sostenibles en el tiempo. En consecuencia, resulta necesario profundizar en los principios que orientan su formulación, los cuales se abordan a continuación.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Principios
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p Las estrategias de participación en salud se fundamentan en principios que orientan la organización de acciones más coherentes, incluyentes y sostenibles en los territorios colombianos. Estos principios permiten que la participación no se limite a la convocatoria de personas, sino que favorezca la articulación entre instituciones, organizaciones sociales y ciudadanía para responder a las necesidades reales de la población.
        .cajon.color-primario.p-4
          p.mb-0 Además, estos principios ayudan a estructurar intervenciones con enfoque territorial, diferencial y corresponsable. Su aplicación fortalece la toma de decisiones, el control social y la construcción de acuerdos entre los actores que participan en la gestión de la salud.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img11.png', alt='')
    p.mb-4 A continuación, se presentan los principios que orientan las estrategias de participación social en salud:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', alt='')
      .col-lg-7.order-1.order-lg-2
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="principio.titulo" v-for="(principio, index) in principios" :key="principio.titulo")
            | {{ principio.texto }}
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img13.svg', alt='')
          .col-lg-10
            p.mb-0 En conjunto, estos principios permiten que las estrategias de participación social en salud sean más organizadas, pertinentes e incluyentes. Su aplicación fortalece la relación entre ciudadanía e instituciones, mejora la coordinación de acciones y contribuye a que las decisiones respondan de manera más cercana a las realidades de los territorios colombianos.
        .cajon.color-secundario.p-4
          p.mb-0 A partir de estos principios, es necesario reconocer los tipos de estrategias que pueden aplicarse en la gestión de la participación social en salud. Esta clasificación permite comprender cómo se organizan las acciones institucionales, intersectoriales y comunitarias para fortalecer la participación en municipios, departamentos y comunidades del país.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Tipos de estrategias
    .BG05.px-5.p-5.mb-4
      figure.mb-4
        img(src='@/assets/curso/temas/tema2/img14.png', alt='')
      p Las estrategias de participación en salud pueden clasificarse de acuerdo con el ámbito de intervención y el tipo de articulación entre actores, lo que permite organizar las acciones de manera más estructurada y facilitar su implementación en los territorios. Esta clasificación no establece divisiones rígidas, sino que ofrece un marco de comprensión para analizar cómo se configuran las dinámicas participativas en función de los objetivos, las capacidades institucionales y las condiciones del contexto.
      p.mb-4 Para facilitar su comprensión, se presentan los principales tipos de estrategias, con una definición breve y un ejemplo aplicado a situaciones que pueden presentarse en municipios, departamentos y comunidades del país.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg.order-2.order-lg-1
        AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(:titulo="tipos.titulo")(v-for="tipos in tipos" :key="tipos.titulo")
            .col-lg-6.order-2.order-lg-1
              p {{ tipos.texto }}
              p.mb-0 #[b Ejemplo: ]{{ tipos.ejemplo }}
            .col-lg-6.col-12.mb-4.mb-lg-0.order-1.order-lg-2
              img(:src="tipos.figure", alt="")
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La articulación de estas estrategias permite comprender que la participación social en salud requiere acciones complementarias. En el contexto colombiano, su implementación coordinada fortalece la relación entre instituciones y comunidad, mejora la capacidad de respuesta frente a las necesidades del territorio y favorece procesos participativos más sostenibles.
    p A partir de esta clasificación, resulta necesario reconocer las fases que orientan la implementación de las estrategias de participación en salud. Estas fases permiten organizar el proceso, definir acciones progresivas y realizar seguimiento a los avances alcanzados en los territorios.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Fases de implementación
    p La implementación de las estrategias de participación en salud se desarrolla mediante un proceso progresivo que permite organizar acciones, articular actores y sostener los procesos participativos en los territorios colombianos. Estas fases no deben entenderse como pasos rígidos, sino como momentos relacionados entre sí, que orientan la puesta en marcha de las estrategias según las necesidades, capacidades y dinámicas de cada comunidad.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este enfoque por fases facilita que la participación ciudadana se desarrolle de manera informada, organizada y con capacidad de incidencia en la gestión del sistema de salud. Además, permite planificar acciones, fortalecer la apropiación comunitaria, gestionar recursos y realizar seguimiento a los avances alcanzados en municipios, departamentos y escenarios comunitarios.
    p.mb-4 Para comprender su aplicación, se presentan las fases principales de implementación:
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.p-5(v-for="fase in fases" :key="fase.titulo" :class="fase.class")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(:src="fase.figure", alt='Texto que describa la imagen')
          
        h5.text-center {{ fase.titulo }}
        p.mb-0 {{ fase.texto }}
        br
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Estas fases permiten comprender que la implementación de una estrategia participativa no se reduce a ejecutar actividades aisladas. Por el contrario, requiere preparar a los actores, fortalecer la confianza, organizar acciones y revisar avances para asegurar los procesos participativos más pertinentes, sostenibles y acordes con la realidad colombiana.
    p.mb-4 Además de reconocer las fases, es importante identificar los aspectos que permiten desarrollarlas de manera clara y ordenada. Estos elementos ayudan a que la estrategia se implemente con mayor coherencia y responda a las condiciones reales de cada territorio:
    SlyderB.mb-4.p-5.tarjeta.color-secundario(:datos="datosSlyder")
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estos elementos permiten que la puesta en marcha de las estrategias participativas sea más clara, ordenada y pertinente. En el contexto colombiano, su aplicación fortalece la confianza entre instituciones y comunidad, mejora la organización de los recursos disponibles y facilita el seguimiento de los compromisos asumidos en los territorios.
    .row.justify-content-center
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img29.svg', alt='')
      .col-lg-9
        p.mb-0 Después de reconocer las fases que orientan la puesta en marcha de las estrategias, es necesario identificar quiénes participan y en qué espacios se desarrollan las acciones. En la participación social en salud, los actores y escenarios permiten comprender cómo se relacionan las instituciones, las organizaciones sociales, los líderes comunitarios y la ciudadanía para construir acuerdos, hacer seguimiento y fortalecer la gestión en los territorios colombianos.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    funciones: [
      'Orientar la acción participativa hacia objetivos claros y pertinentes.',
      'Articular actores institucionales y comunitarios alrededor de necesidades comunes.',
      'Definir líneas de trabajo para organizar las acciones en salud.',
      'Fortalecer la incidencia ciudadana en la toma de decisiones.',
      'Favorecer procesos sostenibles acordes con la realidad territorial.',
    ],
    formas: [
      {
        figure: require('@/assets/curso/temas/tema2/img4.png'),
        titulo: 'Propósito de la estrategia',
        texto:
          'Define la finalidad de la acción participativa y orienta los resultados esperados. En salud, permite establecer si la intervención busca informar, formar, concertar, hacer seguimiento o fortalecer el control social. Por ejemplo, una estrategia municipal puede buscar que la comunidad participe en la priorización de necesidades del Plan Territorial de Salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img5.png'),
        titulo: 'Actores involucrados',
        texto:
          'Identifica las instituciones, organizaciones sociales, líderes comunitarios y ciudadanía que participan en el proceso. Este elemento permite reconocer responsabilidades, capacidades y aportes de cada actor. Por ejemplo, una secretaría de salud, una empresa social del Estado, una junta de acción comunal y una asociación de usuarios pueden trabajar juntas en acciones de participación.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img6.png'),
        titulo: 'Líneas de acción',
        texto:
          'Organizan las actividades que permiten desarrollar la estrategia de manera ordenada. Estas líneas pueden incluir formación ciudadana, comunicación comunitaria, mesas de diálogo, seguimiento a compromisos o control social. Por ejemplo, una línea de acción puede enfocarse en capacitar líderes sobre mecanismos de participación en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img7.png'),
        titulo: 'Pertinencia territorial',
        texto:
          'Permite adaptar la estrategia a las condiciones sociales, culturales, económicas y geográficas de cada comunidad. Este elemento evita aplicar acciones generales que no responden a la realidad local. Por ejemplo, una estrategia para población rural puede incluir encuentros veredales, lenguaje claro y canales comunitarios de comunicación.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img8.png'),
        titulo: 'Seguimiento y mejora',
        texto:
          'Permite revisar los avances de la estrategia, valorar sus resultados y realizar ajustes cuando sea necesario. Este proceso fortalece la transparencia y la corresponsabilidad entre actores. Por ejemplo, una mesa de participación puede reunirse periódicamente para verificar compromisos y proponer mejoras en la atención en salud.',
      },
    ],
    principios: [
      {
        titulo: 'Equidad',
        texto:
          'Busca reducir las desigualdades que limitan la participación de grupos poblacionales vulnerables en la gestión del sistema de salud. Este principio reconoce diferencias sociales, culturales, económicas y territoriales para promover condiciones más justas de acceso a la información y a los espacios de decisión. Ejemplo: una entidad territorial desarrolla encuentros comunitarios en veredas alejadas para facilitar la participación de población rural.',
      },
      {
        titulo: 'Inclusión',
        texto:
          'Promueve la participación de diferentes grupos poblacionales, sin distinción por edad, género, etnia, condición de discapacidad, ubicación territorial o situación social. Su aplicación permite que las decisiones en salud integren diversas voces y experiencias. Ejemplo: una mesa municipal de salud incorpora representantes de mujeres, jóvenes, personas mayores, comunidades étnicas y personas con discapacidad.',
      },
      {
        titulo: 'Transparencia',
        texto:
          'Favorece el acceso claro, oportuno y comprensible a la información relacionada con decisiones, recursos, compromisos y resultados de la gestión en salud. Este principio fortalece la confianza ciudadana y facilita el ejercicio del control social. Ejemplo: una secretaría de salud pública informes de gestión en lenguaje claro y los socializa con organizaciones comunitarias del territorio.',
      },
      {
        titulo: 'Corresponsabilidad',
        texto:
          'Reconoce que la garantía del derecho a la salud requiere compromisos compartidos entre el Estado, las instituciones, las organizaciones sociales y la ciudadanía. Este principio impulsa la participación activa y el cumplimiento de acuerdos. Ejemplo: una empresa social del Estado y una asociación de usuarios acuerdan realizar seguimiento conjunto a la calidad de la atención.',
      },
      {
        titulo: 'Enfoque diferencial',
        texto:
          'Permite adaptar las estrategias a las características sociales, culturales, territoriales y poblacionales de cada comunidad. Su aplicación evita acciones generales que no responden a las condiciones reales de las personas. Ejemplo: una estrategia de comunicación en salud se ajusta para población rural, comunidades indígenas, personas mayores o personas con discapacidad.',
      },
      {
        titulo: 'Enfoque territorial',
        texto:
          'Integra actores institucionales, comunitarios y sociales alrededor de objetivos comunes. Este principio permite coordinar esfuerzos, evitar acciones dispersas y orientar respuestas acordes con las prioridades del territorio. Ejemplo: una alcaldía, una secretaría de salud y líderes comunitarios definen acciones conjuntas para mejorar la atención en zonas rurales.',
      },
      {
        titulo: 'Continuidad',
        texto:
          'Favorece la sostenibilidad de las acciones en el tiempo y evita intervenciones aisladas o discontinuas. Este principio permite mantener procesos participativos más estables, con seguimiento y mejora permanente. Ejemplo: un comité de participación comunitaria realiza reuniones periódicas para revisar compromisos, evaluar avances y proponer ajustes a las acciones en salud.',
      },
    ],
    tipos: [
      {
        figure: require('@/assets/curso/temas/tema2/img15.png'),
        titulo: 'Estrategias internas',
        texto:
          'Se orientan al fortalecimiento organizacional de las instituciones del sector salud, mediante el ajuste de procesos, la cualificación del talento humano y la generación de condiciones que favorezcan la participación ciudadana. Estas estrategias permiten que las entidades estén preparadas para escuchar, orientar y responder a la comunidad de manera clara y organizada. ',
        ejemplo:
          'una institución prestadora de servicios de salud mejora sus canales de atención para recibir propuestas, quejas y recomendaciones de los usuarios sobre la calidad del servicio.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img16.png'),
        titulo: 'Estrategias externas',
        texto:
          'Fortalecen la relación entre las instituciones y la comunidad, promoviendo el acceso a información clara, la interacción con la ciudadanía y la apertura de espacios participativos en el territorio. Estas estrategias permiten que la población conozca sus derechos, deberes y mecanismos de participación en salud.',
        ejemplo:
          'una secretaría de salud realiza encuentros comunitarios en barrios y veredas para socializar rutas de atención, explicar canales de participación y recoger inquietudes de la ciudadanía frente a los servicios disponibles.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img17.png'),
        titulo: 'Estrategias interinstitucionales',
        texto:
          'Coordinan acciones entre entidades del sector salud y otras instituciones públicas para evitar duplicidad de esfuerzos, organizar responsabilidades y mejorar la respuesta institucional frente a las necesidades del territorio. Estas estrategias permiten que las entidades trabajen con objetivos comunes y recursos articulados.',
        ejemplo:
          'una alcaldía municipal, una empresa social del Estado y una secretaría de salud organizan una jornada conjunta de promoción, prevención y orientación ciudadana en una zona rural con dificultades de acceso a servicios.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img18.png'),
        titulo: 'Estrategias transectoriales',
        texto:
          'Integran sectores que influyen en los determinantes sociales de la salud, como educación, ambiente, vivienda, cultura, deporte y desarrollo social. Su propósito es responder a problemáticas que no dependen únicamente del sector salud, sino de las condiciones de vida de la población.',
        ejemplo:
          'los sectores de salud, educación y ambiente desarrollan una estrategia comunitaria para promover el consumo de agua segura, fortalecer hábitos de higiene y prevenir enfermedades en una comunidad rural o periurbana.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img19.png'),
        titulo: 'Estrategias comunitarias',
        texto:
          'Fortalecen la organización social y promueven la participación directa de líderes, redes comunitarias, asociaciones de usuarios, juntas de acción comunal y ciudadanía. Estas estrategias permiten identificar necesidades desde el territorio y construir respuestas con la comunidad.',
        ejemplo:
          'una junta de acción comunal y una asociación de usuarios recopilan inquietudes sobre barreras de atención en salud, las organizan en un documento comunitario y las presentan en una mesa municipal para buscar soluciones con las instituciones correspondientes.',
      },
    ],
    fases: [
      {
        figure: require('@/assets/curso/temas/tema2/img21.svg'),
        class: 'color-primario',
        titulo: 'Socialización',
        texto:
          'Corresponde al momento inicial en el que se presenta la estrategia, sus objetivos y su alcance a los actores involucrados. Esta fase permite informar a la comunidad, generar comprensión del proceso e identificar percepciones, expectativas y disposición para participar.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img22.svg'),
        class: 'color-secundario',
        titulo: 'Posicionamiento',
        texto:
          'Busca consolidar la estrategia en el territorio mediante el reconocimiento y la participación activa de los actores. Esta fase fortalece la credibilidad del proceso, promueve alianzas estratégicas y genera compromisos entre instituciones, organizaciones sociales y comunidad.',
      },
      {
        figure: require('@/assets/curso/temas/tema2/img23.svg'),
        class: 'bg1',
        titulo: 'Ejecución de acciones',
        texto:
          'Corresponde al desarrollo de las actividades definidas en la estrategia. En esta fase se realizan acciones participativas, se gestionan recursos, se articulan actores y se hace seguimiento a los resultados, según las condiciones y necesidades del territorio.',
      },
    ],
    datosSlyder: [
      {
        titulo: 'Información clara',
        texto:
          'Facilita que la comunidad comprenda el propósito de la estrategia, los actores que participan y las acciones previstas. En Colombia, este aspecto es clave para promover confianza y participación informada.',
        imagen: require('@/assets/curso/temas/tema2/img24.png'),
      },
      {
        titulo: 'Participación activa',
        texto:
          'Permite que la ciudadanía, las organizaciones sociales y las instituciones aporten ideas, necesidades y propuestas durante el proceso. Este elemento fortalece la corresponsabilidad y evita que la participación sea solo consultiva.',
        imagen: require('@/assets/curso/temas/tema2/img25.png'),
      },
      {
        titulo: 'Alianzas territoriales',
        texto:
          'Favorecen el trabajo conjunto entre entidades de salud, sectores sociales, líderes comunitarios y organizaciones locales. Estas alianzas amplían la capacidad de respuesta frente a problemas que afectan el bienestar de la población.',
        imagen: require('@/assets/curso/temas/tema2/img26.png'),
      },
      {
        titulo: 'Gestión de recursos',
        texto:
          'Permite identificar los apoyos humanos, técnicos, comunicativos y logísticos necesarios para ejecutar la estrategia. Su adecuada organización ayuda a que las acciones sean viables y sostenibles.',
        imagen: require('@/assets/curso/temas/tema2/img27.png'),
      },
      {
        titulo: 'Seguimiento de resultados',
        texto:
          'Permite revisar avances, valorar dificultades y ajustar las acciones cuando sea necesario. Este proceso fortalece la transparencia, el control social y la mejora continua de la estrategia.',
        imagen: require('@/assets/curso/temas/tema2/img28.png'),
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
