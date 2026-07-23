<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Educación y comunicación para la participación
    figure.mb-4
      img(src="@/assets/curso/temas/tema4/img1.png", alt="Educación y comunicación para la participación")
    p.mb-4 La educación y la comunicación constituyen componentes fundamentales para el fortalecimiento de la participación social en salud, en tanto permiten desarrollar capacidades en la ciudadanía y facilitar procesos de interacción entre los diferentes actores del sistema. Estos elementos no solo apoyan la difusión de información, sino que contribuyen a la apropiación del derecho a la salud y al ejercicio efectivo de la participación en los territorios.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde esta perspectiva, la educación para la participación en salud se orienta al desarrollo de conocimientos, habilidades y actitudes que permitan a las personas comprender el funcionamiento del sistema de salud, reconocer sus derechos y asumir un rol activo en los procesos de toma de decisiones. Este proceso formativo se fundamenta en estrategias pedagógicas que promueven el aprendizaje significativo, el análisis crítico de las problemáticas en salud y la construcción colectiva de soluciones.
    p.mb-4 La comunicación en salud se configura como un proceso estratégico que facilita el acceso a la información, el diálogo entre actores y la visibilización de las acciones participativas. En el contexto colombiano, su propósito es que los mensajes lleguen a la comunidad de manera comprensible, oportuna y útil para fortalecer la participación social en salud. Para lograrlo, la información debe ser:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(:titulo="valor.titulo")(v-for="valor in informacion" :key="valor.titulo")
            .col
              p.mb-0 {{ valor.texto }}
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
    p.mb-4 De esta manera, la comunicación en salud favorece la inclusión de diversos grupos poblacionales y fortalece la interacción entre instituciones, organizaciones sociales y comunidad. Su aplicación permite que la ciudadanía reciba información útil, participe de manera informada y aporte a la construcción colectiva de soluciones en salud.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este sentido, la articulación entre educación y comunicación permite consolidar procesos participativos más efectivos, al combinar el desarrollo de capacidades con la generación de espacios de diálogo e intercambio de información. Esta integración resulta clave para promover una ciudadanía informada, crítica y comprometida con la gestión del sistema de salud, en concordancia con los lineamientos de la Política de Participación Social en Salud (Ministerio de Salud y Protección Social, 2017).
    p.mb-0 A partir de estos elementos, se hace necesario profundizar en las estrategias pedagógicas y comunicativas que orientan la participación en salud, las cuales se desarrollan en los siguientes apartados.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Estrategias pedagógicas
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt='Figura 1. Estrategias pedagógicas para la participación social en salud. Ilustración que representa cinco estrategias pedagógicas para la participación social en salud: aprendizaje basado en experiencias comunitarias, espacios de diálogo y reflexión, talleres formativos participativos, estudios de caso en salud y procesos de formación de líderes.')
      .col-lg-8
        p Las estrategias pedagógicas en la educación para la participación en salud orientan el desarrollo de procesos formativos que van más allá de la transmisión de información. Su propósito es fortalecer conocimientos, habilidades y actitudes que permitan a la ciudadanía comprender las problemáticas en salud, analizar su contexto y participar de manera activa en la toma de decisiones.
        .cajon.color-primario.p-4
          p.mb-0 En el contexto colombiano, estas estrategias deben reconocer las realidades de los territorios, las experiencias comunitarias y la diversidad de actores que intervienen en la gestión de la salud. Por ello, el aprendizaje debe promover el diálogo, la reflexión, el intercambio de saberes y la construcción colectiva de soluciones frente a las necesidades de la población.
    p.mb-4 Desde este enfoque, las estrategias pedagógicas favorecen:
    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.p-5(v-for="fase in fases" :key="fase.titulo" :class="fase.class")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(:src="fase.figure", alt='Texto que describa la imagen')
        br
        h5.text-center {{ fase.titulo }}
        p.mb-0 {{ fase.texto }}
        br
    p.mb-4 Estas estrategias se desarrollan mediante metodologías activas que integran el aprendizaje con la acción. De esta manera, los actores pueden analizar su entorno, identificar problemáticas, proponer alternativas y participar de forma informada en la gestión del sistema de salud.
    p.mb-4 Entre las principales estrategias pedagógicas aplicables a los procesos de formación para la participación en salud se encuentran:
    .BG03.px-5.p-5.mb-4
      .tarjeta.tarjeta--blanco.p-4
        SlyderA(tipo="b")
          .row(v-for="estrategia in pedagogicas" :key="estrategia.titulo")
            .col-lg-6.mb-4.mb-md-0
                h4 {{ estrategia.titulo }}
                p.mb-4 {{ estrategia.texto }}
                p.mb-0 #[b Ejemplo: ] {{ estrategia.ejemplo }}

            .col-lg-6
              figure
                img(:src="estrategia.figure", alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La implementación de estas estrategias favorece el pensamiento crítico, la capacidad de análisis y la toma de decisiones informadas. Asimismo, contribuye al desarrollo de competencias ciudadanas que permiten a las comunidades participar de manera más activa, organizada y consciente en los procesos de gestión del sistema de salud.
    p.mb-0 A partir de estas estrategias pedagógicas, resulta necesario abordar el diseño metodológico, entendido como la organización de las acciones formativas que permiten planear, ejecutar y evaluar los procesos de educación para la participación en salud.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Diseño metodológico
    p.mb-4 El diseño metodológico en la educación para la participación en salud se configura como un proceso estructurado que orienta la planificación, ejecución y evaluación de las acciones formativas dirigidas al fortalecimiento de las capacidades de los actores sociales. Su propósito es garantizar que los procesos educativos contribuyan de manera efectiva a la incidencia de la ciudadanía en la gestión del sistema de salud.
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img13.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='')
          .col-lg-12
            p.mb-0 Más allá de la organización de contenidos, el diseño metodológico integra de manera articulada los objetivos de aprendizaje, las estrategias pedagógicas, las características de la población y las condiciones del contexto territorial. Esta articulación asegura coherencia entre lo que se pretende formar y las acciones que se desarrollan, evitando intervenciones descontextualizadas o poco pertinentes.
    .BG05.px-5.p-5 
      .row.justify-content-center.align-items-center
        .col-lg-6.order-2.order-lg-1
          p.mb-4 Bajo este enfoque, el diseño metodológico reconoce a los participantes como actores activos del proceso formativo, capaces de analizar su realidad, dialogar con otros actores y proponer alternativas frente a las condiciones de salud de su entorno. Para ello, se apoya en principios pedagógicos que favorecen:
          ol.lista-ol--cuadro
            li(v-for="(principio, index) in metodologicos" :key="principio")
              .lista-ol--cuadro__vineta
                span {{ index + 1 }}
              | {{ principio }}
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema4/img15.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Estos elementos permiten que el proceso formativo sea más cercano a las realidades del territorio colombiano y responda a las necesidades de quienes participan. De esta manera, el diseño metodológico no solo organiza actividades educativas, sino que orienta experiencias de aprendizaje útiles para fortalecer la participación social en salud.
    
    .row.justify-content-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/img16.svg', alt='')
      .col-lg-10
        p.mb-0 De igual forma, su estructuración incorpora criterios de flexibilidad, pertinencia y adaptabilidad, lo que posibilita ajustar las acciones formativas según las dinámicas socioculturales del territorio, el perfil de los participantes y los resultados que se van obteniendo durante el proceso. Esta característica resulta clave para garantizar procesos educativos inclusivos, sostenibles y orientados a la acción.
    p.mb-4 En coherencia con estos elementos, un diseño metodológico adecuado se traduce en los siguientes aspectos:
    .row.mb-4
      .col-lg-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p
            b Organizar los procesos de formación de manera coherente.
      .col-lg-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p
            b Adaptar los contenidos al contexto territorial.
      .col-lg-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p
            b Definir metodologias acordes con el perfil de los participantes.
      .col-lg-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p
            b Establecer mecanismos de evaluacion del aprendizaje.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La incorporación de estos elementos contribuye a estructurar procesos formativos más organizados y pertinentes, alineando los contenidos, las metodologías y los mecanismos de evaluación con las necesidades del contexto. De esta manera, se fortalece la calidad de los procesos educativos y se promueve una participación más cualificada en la gestión del sistema de salud.
    p En este escenario, la educación requiere complementarse con estrategias de comunicación que amplíen el acceso a la información, favorezcan la interacción entre actores y potencien la participación en los territorios, aspecto que se aborda en el siguiente apartado.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Población objetivo
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La definición de la población objetivo en los procesos de educación para la participación en salud es un elemento clave para garantizar la pertinencia y efectividad de las acciones formativas. Este proceso implica no solo identificar a los actores involucrados, sino también caracterizarlos en función de sus capacidades, niveles de participación, roles en el territorio y necesidades específicas de formación.
    .row.justify-content-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/img18.svg', alt='')
      .col-lg-10
        p.mb-0 En este sentido, la población objetivo está conformada por diversos actores que intervienen en los procesos participativos, tales como líderes comunitarios, organizaciones sociales, usuarios del sistema de salud, representantes institucionales y otros actores territoriales. Cada uno de estos grupos presenta particularidades que requieren enfoques diferenciados en los procesos educativos.
    p.mb-4 La caracterización de la población permite ajustar los contenidos, las metodologías y las estrategias pedagógicas según las condiciones reales de los participantes. Para lograrlo, es necesario considerar algunos aspectos que orientan el diseño de acciones formativas más pertinentes, accesibles e incluyentes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img19.png', alt='')
      .col-lg-7.order-2.order-lg-1
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="aspecto.titulo" v-for="(aspecto, index) in poblacion" :key="aspecto.titulo")
            | {{ aspecto.texto }}
            | <br><br> #[b Ejemplo: ] {{ aspecto.ejemplo }}
    p.mb-4 Estos aspectos facilitan el diseño de procesos formativos más inclusivos, accesibles y orientados al fortalecimiento de capacidades reales. En el contexto colombiano, reconocer las características de la población objetivo permite proponer actividades más cercanas a las necesidades de las comunidades, mejorar la comprensión de los contenidos y promover una participación social en salud más activa y pertinente.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 De esta manera, una adecuada definición de la población objetivo contribuye a que la educación para la participación no sea homogénea, sino diferenciada y contextualizada. Esto favorece el desarrollo de habilidades comunicativas, organizativas y comunitarias que fortalecen la incidencia ciudadana en los procesos de gestión en salud.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Estrategias comunicativas
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img20.png', alt='')
      .col-lg-8
        p.mb-4 Las estrategias comunicativas en el ámbito de la participación en salud se conciben como procesos planificados orientados a facilitar el acceso a la información, promover la interacción entre actores y fortalecer la apropiación del derecho a la salud por parte de la ciudadanía. Su implementación responde a la necesidad de generar condiciones que favorezcan la comprensión, el diálogo y la incidencia en los procesos participativos.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A diferencia de acciones informativas aisladas, estas estrategias se estructuran de manera intencional, considerando las particularidades del contexto territorial, las características socioculturales de la población y los objetivos definidos en los procesos de participación. Esta orientación garantiza que la comunicación no solo transmita información, sino que contribuya a la movilización social y al fortalecimiento de los vínculos entre comunidad e instituciones.
        .row
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img21.svg', alt='')
          .col-lg-10
            p.mb-0 Desde este enfoque, la comunicación en salud adquiere un carácter dinámico y bidireccional, en el que se reconoce la importancia del diálogo, la escucha activa y la construcción colectiva de significados. En consecuencia, el diseño de estrategias comunicativas requiere la selección adecuada de canales, la formulación de mensajes claros y pertinentes, así como el uso de lenguajes accesibles e incluyentes.
    p.mb-4 En este contexto, las estrategias comunicativas en la participación social en salud se orientan a los siguientes propósitos:
    .BG02.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img22.png", alt="alt").img400.m-auto
        .col-lg-8
          SlyderF.custom(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--blanca.p-4(v-for="aspecto in comunicativas" :key="aspecto.texto")
              .row.justify-content-center.mb-3
                .col-7
                  img(:src="aspecto.figure", alt="alt").img100.m-auto
              br
              p.mb-5 {{ aspecto.texto }}
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La implementación de estos propósitos contribuye a fortalecer la circulación de información relevante, dinamizar los espacios de participación y visibilizar los resultados de las acciones en salud. De esta manera, la comunicación se consolida como un componente estratégico para promover la participación informada y el fortalecimiento del control social en los territorios.
    p.mb-4 Para que las estrategias comunicativas cumplan su propósito en los procesos de participación social en salud, es necesario definir cómo se construye, transmite y evalúa la información. En el contexto colombiano, esto implica reconocer las características del territorio, los canales disponibles y las formas de comunicación más cercanas a la comunidad. Por ello, se deben considerar los siguientes aspectos:
    .BG05.px-5.p-5
      ol.lista-ol--cuadro.lista-ol--separador
        li(v-for="(principio, index) in comunicativas1" :key="principio")
          .lista-ol--cuadro__vineta
            span {{index + 1}}
          p.mb-0 #[b {{principio.titulo}}] {{principio.texto}}
    p.mb-4 Estos aspectos permiten que la comunicación en salud no se limite a difundir información, sino que facilite el diálogo, la comprensión y la participación activa de la ciudadanía. Cuando la estrategia comunicativa se adapta al contexto del territorio colombiano, se fortalecen la confianza, la inclusión y la corresponsabilidad entre instituciones y comunidad.
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img27.svg', alt='')
          .col-lg-10
            p.mb-0 A partir de estas estrategias, se hace necesario reconocer las piezas comunicativas, entendidas como los recursos concretos que permiten llevar los mensajes a la población. Estas piezas facilitan la circulación de información clara, accesible y pertinente para fortalecer la participación social en salud.
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.5 Piezas comunicativas
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img28.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema4/img29.svg', alt='')
          .col-lg-12
            p.mb-0 Las piezas comunicativas constituyen los instrumentos operativos mediante los cuales se implementan las estrategias de comunicación en salud, permitiendo traducir los objetivos comunicativos en mensajes concretos dirigidos a la población. Estas herramientas facilitan la circulación de información de manera clara, pertinente y accesible, contribuyendo a la comprensión de los contenidos y al fortalecimiento de la participación ciudadana. Su diseño requiere un enfoque estratégico que integre el tipo de mensaje, las características del público objetivo, los canales de difusión y las particularidades del contexto territorial, garantizando así su efectividad en los procesos participativos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Las piezas comunicativas fortalecen la participación social en salud cuando presentan mensajes claros, accesibles y pertinentes para la comunidad colombiana. Su uso facilita la comprensión, el diálogo y la participación informada en el territorio.
    p.mb-4 Para comprender cómo se aplican las piezas comunicativas en los procesos de participación social en salud, la siguiente tabla presenta algunos tipos de piezas, su propósito principal y ejemplos de uso. Esta organización permite reconocer que cada recurso cumple una función diferente según el mensaje, el público y el canal de difusión utilizado en el territorio.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de piezas comunicativas en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
            table
              thead
                tr.encabezadotabla
                  th Tipo de pieza
                  th Propósito
                  th Ejemplo
              tbody
                tr(v-for="pieza in piezas" :key="pieza.tipo")
                  td {{ pieza.tipo }}
                  td {{ pieza.proposito }}
                  td {{ pieza.ejemplo }}
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La selección adecuada de las piezas comunicativas permite que la información llegue de manera clara, accesible y pertinente a la comunidad. En el contexto colombiano, estos recursos fortalecen la difusión de mensajes, promueven la participación informada y facilitan la interacción entre instituciones, organizaciones sociales y ciudadanía.
    p.mb-4 Además de seleccionar el tipo de pieza comunicativa, es necesario verificar que el recurso responda al propósito de la estrategia, al público al que se dirige y al contexto donde será utilizado. En los procesos de participación social en salud, las piezas comunicativas deben facilitar la comprensión del mensaje y promover la acción ciudadana. Para ello, se recomienda considerar los siguientes aspectos:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BG04.p-4(v-for="item in aportes" :key="item.titulo")
        .row.justify-content-center.mb-3
          .col-6
            img(:src="item.figure" :alt="item.titulo")
        br
        h5.text-center {{ item.titulo }}
        p.mb-5 {{ item.texto }}
    .row.justify-content-center
      .col-lg-10
        p.mb-4 Estos aspectos permiten que las piezas comunicativas no se limiten a transmitir información, sino que apoyen procesos de participación más claros, incluyentes y cercanos a la comunidad. En el contexto colombiano, su uso adecuado fortalece el diálogo entre instituciones, organizaciones sociales y ciudadanía, y facilita la apropiación de los mensajes relacionados con la salud.
        .cajon.color-primario.p-4
          p.mb-0 Una vez reconocida la importancia de la educación, la comunicación y las piezas comunicativas, es necesario avanzar hacia las acciones y mecanismos de participación. Este tema permite comprender cómo la ciudadanía puede intervenir de manera concreta en los espacios de diálogo, decisión, seguimiento y control social relacionados con la gestión de la salud en los territorios colombianos.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    informacion: [
      {
        titulo: 'Clara',
        texto:
          'Utiliza lenguaje sencillo, directo y comprensible para que la comunidad entienda el mensaje sin dificultad. Evita tecnicismos innecesarios y explica los conceptos importantes cuando sea necesario.',
      },
      {
        titulo: 'Pertinente',
        texto:
          'Responde a las necesidades, características y realidades del territorio. La información debe relacionarse con los problemas, intereses y decisiones que afectan a la comunidad.',
      },
      {
        titulo: 'Accesible',
        texto:
          'Se presenta en formatos, canales y lenguajes que facilitan su consulta por diferentes grupos poblacionales, incluidas personas mayores, población rural, personas con discapacidad y comunidades con baja conectividad.',
      },
    ],
    fases: [
      {
        figure: require('@/assets/curso/temas/tema4/img5.svg'),
        class: 'color-primario',
        titulo: 'Intercambio de saberes',
        texto:
          'Permite reconocer los conocimientos de la comunidad, las experiencias de los actores sociales y los aportes de las instituciones para construir aprendizajes útiles y contextualizados.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img6.svg'),
        class: 'color-secundario',
        titulo: 'Reconocimiento de realidades territoriales',
        texto:
          'Facilita el análisis de las condiciones sociales, culturales, económicas y geográficas que influyen en la salud de cada comunidad colombiana.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img7.svg'),
        class: 'bg1',
        titulo: 'Fortalecimiento de habilidades',
        texto:
          'Desarrolla capacidades para dialogar, argumentar, proponer soluciones, participar en espacios colectivos e incidir en procesos relacionados con la salud.',
      },
    ],
    pedagogicas: [
      {
        figure: require('@/assets/curso/temas/tema4/img8.png'),
        titulo: 'Aprendizaje basado en experiencias comunitarias',
        texto:
          'Parte de situaciones reales del territorio para analizar necesidades, reconocer saberes locales y construir soluciones colectivas. Esta estrategia permite relacionar el aprendizaje con la vida cotidiana de la comunidad y fortalecer la apropiación del conocimiento.',
        ejemplo:
          'analizar una dificultad de acceso al centro de salud de una vereda para proponer acciones de mejora con líderes comunitarios.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img9.png'),
        titulo: 'Espacios de diálogo y reflexión',
        texto:
          'Promueven la conversación organizada entre instituciones, líderes sociales y ciudadanía para comprender problemas, contrastar puntos de vista y construir acuerdos. Esta estrategia fortalece la escucha activa, el respeto por las opiniones y la participación informada.',
        ejemplo:
          'realizar una mesa comunitaria para identificar barreras de atención y acordar compromisos con la entidad de salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img10.png'),
        titulo: 'Talleres formativos participativos',
        texto:
          'Permiten aprender mediante actividades prácticas, ejercicios grupales y análisis de situaciones cercanas al contexto de los participantes. Esta estrategia fortalece capacidades para actuar en espacios de participación social en salud.',
        ejemplo:
          'desarrollar un taller donde la comunidad construya una ruta sencilla para presentar solicitudes, quejas o propuestas ante las instituciones de salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img11.png'),
        titulo: 'Estudios de caso en salud',
        texto:
          'Facilitan el análisis de situaciones concretas relacionadas con acceso, calidad, comunicación, control social o participación comunitaria. Esta estrategia ayuda a identificar problemas, causas, actores involucrados y posibles soluciones. ',
        ejemplo:
          'revisar un caso de demora en la atención para reconocer responsabilidades, canales de comunicación y alternativas de solución.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img12.png'),
        titulo: 'Procesos de formación de líderes',
        texto:
          'Fortalecen capacidades de liderazgo, comunicación, organización comunitaria y seguimiento a compromisos en salud. Esta estrategia prepara a los actores sociales para orientar, acompañar y representar a sus comunidades.',
        ejemplo:
          'capacitar a representantes de asociaciones de usuarios para participar en espacios de control social y seguimiento a la calidad del servicio.',
      },
    ],
    metodologicos: [
      'Aprendizaje significativo.',
      'Diálogo de saberes.',
      'Construcción colectiva del conocimiento.',
      'Análisis del contexto territorial.',
      'Participación de la comunidad.',
      'Aplicación práctica de lo aprendido.',
    ],
    poblacion: [
      {
        titulo: 'Nivel de conocimiento previo',
        texto:
          'Permite identificar qué tanto conocen los participantes sobre participación social en salud, derechos, deberes y mecanismos de control social.',
        ejemplo:
          'en una comunidad rural, algunas personas pueden conocer la junta de acción comunal, pero no los espacios formales de participación en salud.',
      },
      {
        titulo: 'Experiencia en participación',
        texto:
          'Ayuda a reconocer si los actores han participado antes en reuniones, comités, veedurías, asociaciones de usuarios o procesos comunitarios.',
        ejemplo:
          'una asociación de usuarios puede tener experiencia en presentar solicitudes ante una entidad de salud, mientras otros ciudadanos apenas inician su proceso participativo.',
      },
      {
        titulo: 'Condiciones socioculturales',
        texto:
          'Permite adaptar el lenguaje, los ejemplos y las actividades a las características culturales, educativas y sociales de la población.',
        ejemplo:
          'en territorios con población campesina, los contenidos pueden relacionarse con situaciones cotidianas de acceso a servicios, jornadas de salud o atención en veredas.',
      },
      {
        titulo: 'Dinámicas propias del territorio',
        texto:
          'Facilita reconocer las condiciones geográficas, institucionales y comunitarias que influyen en la participación.',
        ejemplo:
          'en zonas rurales dispersas, las estrategias formativas pueden requerir encuentros comunitarios presenciales, horarios flexibles y materiales de fácil consulta.',
      },
    ],
    comunicativas: [
      {
        figure: require('@/assets/curso/temas/tema4/img23.svg'),
        texto: 'Difundir informacion sobre derechos en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img24.svg'),
        texto: 'Promover espacios de participacion.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img25.svg'),
        texto: 'Visitar acciones y resultados.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img26.svg'),
        texto: 'Fortalecer el vinculo entre institucional y comunidad.',
      },
    ],
    comunicativas1: [
      {
        titulo: 'Mensaje claro:',
        texto:
          'presentar la información con lenguaje sencillo, directo y comprensible para la población.',
      },
      {
        titulo: 'Canal adecuado:',
        texto:
          'seleccionar medios pertinentes, como reuniones comunitarias, carteleras, emisoras locales, redes sociales o grupos institucionales.',
      },
      {
        titulo: 'Público definido:',
        texto:
          'reconocer a quién va dirigido el mensaje, según edad, ubicación, nivel educativo y condiciones de acceso.',
      },
      {
        titulo: 'Participación activa:',
        texto:
          'promover espacios donde la ciudadanía pueda preguntar, opinar y aportar propuestas.',
      },
      {
        titulo: 'Seguimiento del mensaje:',
        texto:
          'verificar si la información fue comprendida y si generó participación o acciones concretas.',
      },
    ],
    piezas: [
      {
        tipo: 'Informativa',
        proposito:
          'Transmitir información clara sobre derechos, deberes, servicios o rutas de atención.',
        ejemplo: 'Cartillas, folletos y volantes.',
      },
      {
        tipo: 'Educativa',
        proposito:
          'Facilitar la comprensión de conceptos, procesos y acciones relacionadas con participación en salud.',
        ejemplo: 'Infografías, guías breves y fichas pedagógicas.',
      },
      {
        tipo: 'Promocional',
        proposito:
          'Motivar la participación de la ciudadanía en campañas, encuentros o espacios comunitarios.',
        ejemplo: 'Afiches, invitaciones y piezas para campañas.',
      },
      {
        tipo: 'Digital',
        proposito:
          'Ampliar el alcance del mensaje mediante canales tecnológicos y redes de comunicación.',
        ejemplo: 'Redes sociales, videos cortos y mensajes institucionales.',
      },
      {
        tipo: 'Comunitaria',
        proposito:
          'Facilitar el diálogo local y la circulación de información en espacios cercanos.',
        ejemplo: 'Reuniones, perifoneo y carteleras comunitarias.',
      },
    ],
    aportes: [
      {
        figure: require('@/assets/curso/temas/tema4/img30.svg'),
        titulo: 'Claridad del mensaje',
        texto:
          'El contenido debe presentar una idea principal, usar lenguaje sencillo y evitar términos técnicos sin explicación.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img31.svg'),
        titulo: 'Pertinencia territorial',
        texto:
          'La pieza debe relacionarse con las necesidades, prácticas, canales y formas de comunicación propias de la comunidad.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img32.svg'),
        titulo: 'Accesibilidad',
        texto:
          'El recurso debe facilitar la lectura, la comprensión visual y el acceso para diferentes grupos poblacionales.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img33.svg'),
        titulo: 'Intención participativa',
        texto:
          'La pieza debe invitar a informarse, dialogar, asistir, preguntar, proponer o hacer seguimiento a las acciones en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema4/img34.svg'),
        titulo: 'Coherencia visual',
        texto:
          'El diseño debe organizar la información con títulos claros, jerarquía visual, imágenes pertinentes y textos breves.',
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
