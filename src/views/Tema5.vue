<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Acciones y mecanismos de participación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema5/img1.png', alt='')
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La participación social en salud se materializa a través de acciones y mecanismos que permiten a la ciudadanía intervenir de manera efectiva en los procesos relacionados con la gestión del sistema de salud. Estos componentes articulan la movilización social con los espacios formales de decisión, facilitando la interacción entre actores institucionales y comunitarios en los territorios.
        .row
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img2.svg', alt='')
          .col-lg-10
            p.mb-0 En este marco, las acciones de participación corresponden a las actividades concretas orientadas a promover la vinculación activa de la ciudadanía, mientras que los mecanismos hacen referencia a las instancias, espacios y herramientas institucionales que garantizan el ejercicio de dicha participación. La integración de estos elementos permite estructurar procesos participativos más organizados, con mayor capacidad de incidencia en la toma de decisiones.
    p.mb-4 Desde una perspectiva operativa, las acciones de participación fortalecen el conocimiento, la organización social y la capacidad de análisis de la ciudadanía frente a las problemáticas en salud. Entre las principales acciones se encuentran:
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
              p.mb-0 #[b Ejemplos: ]{{ forma.ejemplo }}
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estas acciones permiten que la participación social en salud pase de la intención a la práctica. En el contexto colombiano, su desarrollo fortalece la capacidad de las comunidades para reconocer necesidades, dialogar con las instituciones, construir propuestas y hacer seguimiento a los compromisos asumidos en el territorio.
        .row
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img9.svg', alt='')
          .col-lg-10
            p.mb-0 De manera complementaria, los mecanismos de participación en salud constituyen instancias formales que facilitan la interlocución entre la ciudadanía y las instituciones, de acuerdo con la normativa vigente. Estos mecanismos promueven el control social, la transparencia en la gestión pública y la participación en procesos de planeación, ejecución y evaluación en salud.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img8.png', alt='')
    p.mb-4 Para diferenciar las formas en que la ciudadanía interviene en la gestión de la salud, la siguiente tabla organiza algunos elementos según su función principal. Esta presentación permite reconocer cuáles corresponden a actividades concretas de movilización comunitaria y cuáles hacen parte de espacios formales de interlocución, seguimiento y control social en el contexto colombiano.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Acciones y mecanismos de participación social en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
            table
              thead
                tr.encabezadotabla
                  th Tipo
                  th Elemento
                  th(style="width:50%") Descripción
              tbody
                tr(v-for="fila in acciones" :key="fila.elemento")
                  td.text-bold {{ fila.tipo }}
                  td {{ fila.elemento }}
                  td {{ fila.descripcion }}
    p.mb-0 La articulación entre acciones y mecanismos permite consolidar procesos participativos más efectivos, al integrar la intervención directa de la ciudadanía con el acceso a escenarios formales de decisión. Esta relación fortalece la gobernanza en salud, promueve el control social y contribuye a que las decisiones respondan de manera más pertinente a las necesidades de la población.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Factores de éxito y debilidades
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de acciones de participación en salud está condicionado por diversos factores que pueden potenciar o limitar su efectividad en el territorio. Estos factores no deben analizarse de manera aislada, sino como parte de una dinámica compleja en la que interactúan elementos institucionales, comunitarios y contextuales. En este sentido, comprender tanto los factores de éxito como las debilidades permite identificar las condiciones que favorecen la participación y aquellas que requieren fortalecimiento para mejorar los procesos participativos.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Desde una perspectiva estratégica, los factores de éxito están asociados a la capacidad de articulación entre actores, la disponibilidad de información, la claridad en la orientación de las acciones y el fortalecimiento de capacidades en la comunidad. Por su parte, las debilidades se relacionan con limitaciones en la participación, dificultades en la coordinación, discontinuidad de los procesos y baja apropiación de los mecanismos participativos. El análisis conjunto de estos elementos facilita la toma de decisiones orientadas a mejorar la calidad, sostenibilidad e impacto de las acciones en salud.
    p.mb-4 Para comprender cómo estos elementos influyen en la participación social en salud, la siguiente tabla organiza los principales factores de éxito y debilidades que pueden presentarse en los territorios colombianos. Esta clasificación permite reconocer qué condiciones fortalecen la participación ciudadana y cuáles requieren acciones de mejora para favorecer procesos más organizados, sostenibles y pertinentes.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Factores de éxito y debilidades en la participación en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
            table
              thead
                tr.encabezadotabla
                  th Categoría
                  th(style="width:25%") Elemento
                  th(style="width:25%") Descripción
                  th(style="width:30%") Implicación
              tbody
                tr(v-for="fila in factores" :key="fila.elemento")
                  td.text-bold {{ fila.categoria }}
                  td {{ fila.elemento }}
                  td {{ fila.descripcion }}
                  td {{ fila.implicacion }}
    p.mb-4 Para fortalecer los procesos de participación social en salud, no basta con identificar los factores de éxito y las debilidades. También es necesario definir acciones de mejora que permitan aprovechar las fortalezas, reducir las limitaciones y orientar la toma de decisiones en el territorio. En el contexto colombiano, este análisis puede apoyar los siguientes pasos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img11.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(:numero="aspecto.num" :titulo="aspecto.titulo" v-for="(aspecto, index) in poblacion" :key="aspecto.titulo")
            | {{ aspecto.texto }}
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img13.svg', alt='')
          .col-lg-10  
            p.mb-0 Estos pasos permiten convertir el análisis de factores y debilidades en una herramienta práctica para mejorar la participación social en salud. Su aplicación contribuye a procesos más organizados, transparentes y sostenibles, en los que la ciudadanía y las instituciones trabajan de manera conjunta para responder a las necesidades de la población.
        .cajon.color-primario.p-4
          .row
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema5/img14.svg', alt='')
            .col-lg-9
              p.mb-0 A partir de este análisis, resulta necesario revisar el impacto de la participación social en salud. Este tema permite comprender qué cambios generan las acciones participativas en la comunidad, en las instituciones y en la gestión del sistema de salud en los territorios colombianos.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Impacto
    .BG05.px-5.p-5
      figure.mb-4
        img(src='@/assets/curso/temas/tema5/img15.png', alt='')
      p.mb-4 El impacto de las acciones de participación en salud se refiere a los cambios generados en la gestión del sistema de salud y en la capacidad de la ciudadanía para incidir en los procesos de toma de decisiones. Este impacto debe entenderse como un proceso progresivo que se construye a partir de la implementación sostenida de acciones participativas, más allá de resultados inmediatos o aislados.
      p.mb-4 En este sentido, el impacto no solo se mide por la cantidad de participantes o actividades realizadas, sino por los cambios que se generan en la comunidad, las instituciones y los procesos de gestión en salud. Entre los principales efectos se encuentran:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.p-5(v-for="fase in fases" :key="fase.titulo" :class="fase.class")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(:src="fase.figure", alt='Texto que describa la imagen')
          
        br
        h5.text-center {{ fase.titulo }}
        p.mb-5.text-center {{ fase.texto }}
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p.mb-4 Esto implica evaluar en qué medida las acciones participativas logran influir en la planificación, ejecución y seguimiento de las políticas públicas en salud. En el contexto colombiano, esta evaluación permite reconocer si la participación ciudadana aporta a procesos más transparentes, incluyentes y pertinentes para cada territorio.
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img19.svg', alt='')
          .col-lg-9
            p.mb-0 Uno de los principales efectos de estas acciones es el fortalecimiento del control social, porque permite a la ciudadanía ejercer vigilancia sobre la gestión de los recursos y promover mayores niveles de transparencia en las instituciones. De igual manera, se evidencia un incremento en la participación informada, donde los actores adquieren mayores capacidades para analizar, proponer y tomar decisiones en los espacios participativos.
        .cajon.color-secundario.p-4
          p.mb-0 El impacto de la participación social en salud se refleja cuando la ciudadanía logra incidir en las decisiones, hacer seguimiento a los compromisos y aportar soluciones acordes con las necesidades reales del territorio colombiano.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img20.png', alt='')
    p.mb-4 Para valorar el impacto de la participación social en salud, es importante revisar aspectos que permitan reconocer avances, dificultades y oportunidades de mejora. Estos elementos ayudan a identificar si la participación genera cambios reales en la gestión de la salud y en la relación entre instituciones, organizaciones sociales y comunidad.
    .BG06.px-5.p-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-8.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/tema5/img21.svg', alt='')
        .col-lg-7
          ol.lista-ol--cuadro.lista-ol--separador
            li(v-for="item in valoracion" :key="item.texto")
              .lista-ol--cuadro__vineta
                span {{item.num}}
              | {{item.texto}}
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Desde una perspectiva de gestión, la evaluación del impacto permite retroalimentar los procesos participativos, reconocer avances, identificar limitaciones y ajustar las estrategias desarrolladas. Este análisis contribuye a que las acciones en salud generen resultados pertinentes, sostenibles y acordes con las necesidades de cada territorio colombiano.
    p.mb-0 Una vez revisado el impacto de las acciones participativas, es necesario reconocer los ejes que orientan la participación social en salud. Estos ejes permiten organizar las acciones, definir prioridades y fortalecer la incidencia ciudadana en los procesos de gestión, seguimiento y control social en los territorios colombianos.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Ejes de participación
    .row.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/img22.svg', alt='')
      .col-lg-10
        p.mb-0 Los ejes de participación social en salud constituyen orientaciones estratégicas que permiten organizar, fortalecer y sostener los procesos participativos en los territorios. Estos ejes articulan la gestión institucional, el papel de la ciudadanía y los mecanismos de control social, con el fin de promover acciones más coherentes, incluyentes y pertinentes.
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema5/img23.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema5/img24.svg', alt='')
          .col-lg-12
            p.mb-0 En el marco de la Política de Participación Social en Salud, adoptada mediante la Resolución 2063 de 2017 del Ministerio de Salud y Protección Social, los ejes estratégicos establecen las líneas de acción necesarias para garantizar una participación efectiva, informada y con capacidad de incidencia en la toma de decisiones en salud. Su implementación articulada favorece procesos más coherentes, sostenibles y ajustados a las dinámicas del territorio.
    p.mb-4 Para comprender cómo se organizan estos ejes en la práctica, la siguiente tabla presenta su propósito, las acciones clave y el resultado esperado. Esta organización permite identificar la función de cada eje dentro de los procesos participativos y reconocer su aporte al fortalecimiento de la participación social en salud en los territorios.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Ejes estratégicos de la participación social en salud
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-b.color-acento-contenido 
          .tabla-b
            table
              thead
                tr.encabezadotabla
                  th Eje estratégico
                  th Propósito
                  th Acciones clave
                  th Resultado esperado
              tbody
                tr(v-for="eje in ejes" :key="eje.eje")
                  td.text-bold {{ eje.eje }}
                  td {{ eje.proposito }}
                  td
                    ul.lista-ul.mb-0
                      li.mb-0.d-flex(v-for="accion in eje.acciones" :key="accion")
                        i.lista-ul__vineta
                        |
                        p.mb-0 {{ accion }}
                  td {{ eje.resultado }}
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La articulación de estos ejes permite consolidar procesos participativos más coherentes, sostenibles y con mayor capacidad de incidencia. Su aplicación favorece la coordinación entre instituciones y ciudadanía, fortalece la toma de decisiones informadas y promueve el ejercicio del derecho a la participación en los territorios.
    p.mb-4 Además de reconocer los ejes estratégicos, es importante identificar algunos aspectos que favorecen su aplicación en los procesos de participación social en salud. Estos elementos permiten llevar las orientaciones generales a acciones concretas, organizadas y pertinentes para los territorios colombianos:
    SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.BG04.p-4(v-for="item in aportes" :key="item.titulo")
        .row.justify-content-center.mb-3
          .col-6
            img(:src="item.figure" :alt="item.titulo")
        br
        h5.text-center {{ item.titulo }}
        p.mb-5.text-center {{ item.texto }}
    p.mb-4 Estos aspectos ayudan a que los ejes de participación se conviertan en acciones aplicables en el territorio. Su desarrollo fortalece la organización comunitaria, mejora la relación entre ciudadanía e instituciones y promueve procesos participativos más claros, incluyentes y sostenibles.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 A partir de estos ejes, resulta necesario abordar la implementación, gestión y control social, como procesos que permiten llevar la participación a la práctica, organizar recursos, tomar decisiones y verificar el cumplimiento de las acciones acordadas en salud.

    
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    aportes: [
      {
        figure: require('@/assets/curso/temas/tema5/img26.svg'),
        titulo: 'Claridad de roles',
        texto:
          'Permite reconocer qué función cumplen las instituciones, la comunidad y las organizaciones sociales dentro del proceso participativo.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img27.svg'),
        titulo: 'Información comprensible',
        texto:
          'Facilita que la ciudadanía conozca sus derechos, los mecanismos de participación y las acciones disponibles en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img28.svg'),
        titulo: 'Fortalecimiento de capacidades',
        texto:
          'Desarrolla habilidades para dialogar, proponer, hacer seguimiento e incidir en decisiones relacionadas con la salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img29.svg'),
        titulo: 'Espacios de diálogo',
        texto:
          'Promueven encuentros entre instituciones y comunidad para analizar necesidades, construir acuerdos y revisar compromisos.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img30.svg'),
        titulo: 'Seguimiento ciudadano',
        texto:
          'Permite verificar avances, recursos y acciones institucionales mediante ejercicios de control social y participación informada.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img31.svg'),
        titulo: 'Articulación territorial',
        texto:
          'Integra actores, recursos y esfuerzos para responder de manera más pertinente a las necesidades de cada comunidad.',
      },
    ],
    fases: [
      {
        figure: require('@/assets/curso/temas/tema5/img16.svg'),
        class: 'color-primario',
        titulo: 'Transformación de las dinámicas de participación',
        texto:
          'Se evidencia cuando la ciudadanía pasa de recibir información a intervenir de manera activa en espacios de diálogo, seguimiento y toma de decisiones sobre temas de salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img17.svg'),
        class: 'color-secundario',
        titulo: 'Fortalecimiento del control social',
        texto:
          'Permite que la comunidad ejerza vigilancia sobre la gestión pública, el uso de los recursos, la calidad de los servicios y el cumplimiento de los compromisos institucionales.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img18.svg'),
        class: 'bg1',
        titulo: 'Mejora en la calidad de las decisiones en salud',
        texto:
          'Se logra cuando las instituciones incorporan las necesidades, propuestas y experiencias de la comunidad en la planeación, ejecución y evaluación de acciones en salud.',
      },
    ],
    poblacion: [
      {
        num: 'A',
        titulo: 'Revisar las condiciones del territorio',
        texto:
          'Permite reconocer las necesidades, recursos, actores y barreras que influyen en la participación comunitaria.',
      },
      {
        num: 'B',
        titulo: 'Priorizar los aspectos por mejorar',
        texto:
          'Ayuda a identificar cuáles debilidades requieren atención inmediata para evitar la pérdida de confianza o continuidad del proceso.',
      },
      {
        num: 'C',
        titulo: 'Fortalecer la articulación entre actores',
        texto:
          'Facilita la coordinación entre instituciones, comunidad, organizaciones sociales y sectores relacionados con la salud.',
      },
      {
        num: 'D',
        titulo: 'Promover información clara y oportuna',
        texto:
          'Permite que la ciudadanía comprenda los procesos, participe de manera informada y realice seguimiento a los compromisos.',
      },
      {
        num: 'E',
        titulo: 'Evaluar los avances alcanzados',
        texto:
          'Favorece la mejora continua, el control social y la toma de decisiones basada en resultados.',
      },
    ],
    formas: [
      {
        figure: require('@/assets/curso/temas/tema5/img3.png'),
        titulo: 'Procesos de sensibilización',
        texto:
          'Permiten informar a la comunidad sobre el derecho a la salud, los deberes ciudadanos y los mecanismos de participación.',
        ejemplo:
          'una secretaría de salud realiza una jornada pedagógica en una vereda para explicar cómo presentar solicitudes o propuestas ante las instituciones de salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img4.png'),
        titulo: 'Jornadas comunitarias',
        texto:
          'Facilitan la identificación de necesidades, percepciones y problemas relacionados con la atención en salud.',
        ejemplo:
          'líderes comunitarios, usuarios y funcionarios de salud se reúnen en un barrio para reconocer barreras de acceso y priorizar acciones de mejora.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img5.png'),
        titulo: 'Construcción colectiva de propuestas',
        texto:
          'Promueve que la ciudadanía participe en la formulación de alternativas frente a problemáticas del territorio.',
        ejemplo:
          'una comunidad elabora propuestas para mejorar la atención preventiva y las presenta en una mesa local de participación en salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img6.png'),
        titulo: 'Acompañamiento a organizaciones sociales',
        texto:
          'Fortalece las capacidades de juntas de acción comunal, asociaciones de usuarios, veedurías y líderes comunitarios.',
        ejemplo:
          'una entidad territorial orienta a una asociación de usuarios sobre cómo hacer seguimiento a compromisos institucionales.',
      },
      {
        figure: require('@/assets/curso/temas/tema5/img7.png'),
        titulo: 'Seguimiento participativo',
        texto:
          'Permite revisar el cumplimiento de acciones, programas o servicios de salud con participación de la comunidad.',
        ejemplo:
          'una veeduría ciudadana verifica avances de una jornada de salud rural y presenta observaciones para mejorar próximas intervenciones.',
      },
    ],
    acciones: [
      {
        tipo: 'Acción',
        elemento: 'Sensibilización comunitaria',
        descripcion:
          'Procesos educativos orientados al reconocimiento del derecho a la salud y la participación.',
      },
      {
        tipo: 'Acción',
        elemento: 'Diagnóstico participativo',
        descripcion:
          'Identificación de necesidades y problemáticas en salud con la comunidad.',
      },
      {
        tipo: 'Acción',
        elemento: 'Construcción de propuestas',
        descripcion:
          'Formulación colectiva de acciones para el mejoramiento de las condiciones de salud.',
      },
      {
        tipo: 'Acción',
        elemento: 'Seguimiento participativo',
        descripcion:
          'Evaluación comunitaria de programas y servicios de salud.',
      },
      {
        tipo: 'Mecanismo',
        elemento: 'Asociaciones de usuarios',
        descripcion:
          'Organizaciones que representan a los afiliados ante las instituciones de salud.',
      },
      {
        tipo: 'Mecanismo',
        elemento: 'Veedurías ciudadanas',
        descripcion: 'Instancias de control social sobre la gestión pública.',
      },
      {
        tipo: 'Mecanismo',
        elemento: 'COPACOS',
        descripcion:
          'Espacios de participación comunitaria en la planeación y seguimiento en salud.',
      },
      {
        tipo: 'Mecanismo',
        elemento: 'Consejos territoriales de salud',
        descripcion:
          'Instancias de concertación entre autoridades y comunidad.',
      },
      {
        tipo: 'Mecanismo',
        elemento: 'Audiencias públicas en salud',
        descripcion:
          'Espacios de rendición de cuentas sobre la gestión del sistema.',
      },
    ],
    factores: [
      {
        categoria: 'Factor de éxito',
        elemento: 'Articulación de actores',
        descripcion:
          'Coordinación efectiva entre instituciones, comunidad y otros sectores.',
        implicacion: 'Favorece procesos integrados y coherentes.',
      },
      {
        categoria: 'Factor de éxito',
        elemento: 'Claridad en los objetivos',
        descripcion: 'Definición precisa de propósitos y resultados esperados.',
        implicacion: 'Mejora la orientación de las acciones.',
      },
      {
        categoria: 'Factor de éxito',
        elemento: 'Acceso a información',
        descripcion: 'Información clara, oportuna y pertinente.',
        implicacion: 'Permite participación informada.',
      },
      {
        categoria: 'Debilidad',
        elemento: 'Baja participación',
        descripcion: 'Escaso involucramiento de la comunidad.',
        implicacion: 'Limita el alcance de las acciones.',
      },
      {
        categoria: 'Debilidad',
        elemento: 'Débil articulación',
        descripcion: 'Falta de coordinación entre actores.',
        implicacion: 'Genera fragmentación en los procesos.',
      },
      {
        categoria: 'Debilidad',
        elemento: 'Falta de continuidad',
        descripcion: 'Interrupción de procesos participativos.',
        implicacion: 'Reduce la sostenibilidad.',
      },
    ],
    impactos: [
      {
        titulo: 'Transformación de dinámicas',
        texto:
          'La ciudadanía pasa de recibir información a intervenir activamente en diálogo, seguimiento y decisión.',
      },
      {
        titulo: 'Fortalecimiento del control social',
        texto:
          'La comunidad vigila gestión pública, recursos, calidad de servicios y compromisos institucionales.',
      },
      {
        titulo: 'Mejora de decisiones',
        texto:
          'Las instituciones incorporan necesidades, propuestas y experiencias de la comunidad.',
      },
    ],
    valoracion: [
      {
        num: 'A',
        texto:
          'Participación activa de la comunidad en los espacios de diálogo y decisión. ',
      },
      {
        num: 'B',
        texto:
          'Cumplimiento de los acuerdos establecidos entre instituciones y ciudadanía. ',
      },
      {
        num: 'C',
        texto:
          'Seguimiento comunitario a los compromisos y acciones en salud. ',
      },
      {
        num: 'D',
        texto:
          'Mayor comprensión de los derechos, deberes y mecanismos de participación. ',
      },
      {
        num: 'E',
        texto: 'Acceso a información clara para fortalecer el control social. ',
      },
      {
        num: 'F',
        texto:
          'Mejoras visibles en la atención, la comunicación o la respuesta institucional en el territorio.',
      },
    ],
    ejes: [
      {
        eje: 'Fortalecimiento institucional.',
        proposito:
          'Mejorar la capacidad de las instituciones para facilitar la participación.',
        acciones: [
          'Adecuación de procesos institucionales.',
          'Formación del talento humano.',
          'Creación de espacios participativos.',
          'Asignación de recursos.',
        ],
        resultado:
          'Instituciones más abiertas, organizadas y orientadas a la participación.',
      },
      {
        eje: 'Empoderamiento de la ciudadanía y sus organizaciones.',
        proposito:
          'Fortalecer la capacidad de la comunidad para incidir en decisiones en salud.',
        acciones: [
          'Acceso a información.',
          'Formación en participación.',
          'Fortalecimiento organizativo.',
          'Desarrollo de liderazgo.',
        ],
        resultado:
          'Ciudadanía activa, informada y con capacidad de incidencia.',
      },
      {
        eje: 'Impulso de la cultura de la salud.',
        proposito:
          'Promover valores y prácticas que favorezcan la participación y el bienestar.',
        acciones: [
          'Sensibilización en salud.',
          'Promoción del autocuidado.',
          'Fomento del diálogo.',
          'Fortalecimiento del tejido social.',
        ],
        resultado: 'Comunidad comprometida con la salud y la participación.',
      },
      {
        eje: 'Fortalecimiento del control social.',
        proposito:
          'Garantizar la vigilancia ciudadana sobre la gestión en salud.',
        acciones: [
          'Seguimiento a programas.',
          'Participación en rendición de cuentas.',
          'Vigilancia de recursos.',
          'Uso de mecanismos participativos.',
        ],
        resultado:
          'Mayor transparencia y control en la gestión del sistema de salud.',
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
