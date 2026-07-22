<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Implementación, gestión y control social
    figure.mb-4
      img(src='@/assets/curso/temas/tema6/img1.png', alt='')
    p.mb-4 La implementación, gestión y control social constituyen componentes esenciales para garantizar que los procesos de participación en salud se desarrollen de manera efectiva, organizada y con capacidad real de incidencia en la toma de decisiones. Estos elementos permiten pasar de la formulación de estrategias a su materialización en el territorio, asegurando la articulación entre actores y el seguimiento de las acciones desarrolladas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4 
          p.mb-0 La implementación hace referencia a la puesta en marcha de las estrategias definidas, mediante la ejecución de acciones participativas que involucran a la ciudadanía, las instituciones y otros actores del sistema de salud. Este proceso implica la coordinación de actividades, la asignación de recursos y la adaptación de las acciones a las dinámicas territoriales, con el fin de garantizar su pertinencia y efectividad.
    p.mb-4 La gestión de la participación en salud requiere organizar diferentes acciones para que los procesos participativos sean claros, coherentes y sostenibles. Para lograrlo, es necesario coordinar actividades, articular instituciones, acompañar a los actores sociales y fortalecer redes de trabajo en el territorio como:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img2.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="aspecto.titulo" v-for="(aspecto, index) in gestiones" :key="aspecto.titulo")
            | {{ aspecto.texto }}
    p.mb-4 Estos elementos muestran que la gestión de la participación en salud no se limita a coordinar actividades, sino que busca fortalecer procesos organizados, articulados y sostenibles. En el contexto colombiano, su aplicación favorece una participación más efectiva, informada y cercana a las necesidades de cada territorio.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde una perspectiva integral, la relación entre implementación, gestión y control social permite fortalecer la participación informada, la toma de decisiones concertadas y la evaluación permanente de las acciones en salud. Esta articulación favorece intervenciones más pertinentes, organizadas y sostenibles, de acuerdo con las necesidades de la población y las dinámicas de cada territorio.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4 
          .row
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema6/img4.svg', alt='')
            .col-lg-9
              p.mb-0 La implementación, la gestión y el control social permiten que la participación en salud pase de la planeación a la acción. Su articulación fortalece la organización comunitaria, el seguimiento de compromisos y la construcción de respuestas pertinentes para cada territorio.
        p.mb-0 En consecuencia, la adecuada integración de estos componentes permite no solo ejecutar acciones, sino también garantizar su seguimiento, evaluación y mejora continua, fortaleciendo el ejercicio del derecho a la salud y la participación social en Colombia.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p Con el propósito de profundizar en la forma en que la participación ciudadana pasa de la planeación a la acción, se propone el siguiente recurso de audio. Este material explica, de manera clara y contextualizada, cómo la implementación, la gestión, el seguimiento, la toma de decisiones y el control social permiten fortalecer la articulación entre instituciones, organizaciones sociales y comunidad, para construir respuestas acordes con las necesidades de los territorios colombianos.
        .tarjeta.bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/tema6/img6.svg', alt='')
            .col-lg-6
              TarjetaAudio.color-primario.mb-3(
                texto="¡Salud en acción!"
                :audio="require('@/assets/curso/temas/audio/Podcast_CF2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img5.png', alt='')
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El recurso de audio ¡Salud en acción! complementa la comprensión del tema al explicar cómo la participación ciudadana puede pasar de la planeación a acciones organizadas, con responsables, recursos y seguimiento. A partir de esta orientación, se aborda el diseño de estrategias, proceso que permite definir los objetivos, actores, recursos y metodologías necesarios para desarrollar acciones participativas y pertinentes en los territorios colombianos.
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Diseño de estrategias
    p El diseño de estrategias en participación social en salud se configura como una fase determinante que orienta la planificación de las acciones a implementar en el territorio, asegurando su alineación con las necesidades de la población y los lineamientos de la política pública. Este proceso implica la estructuración intencional de intervenciones que integran objetivos, actores, recursos y metodologías, con el propósito de fortalecer la incidencia de la ciudadanía en la gestión del sistema de salud.
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img7.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema6/Group 1190606.svg', alt='')
          .col-lg-12
            p.mb-0 Desde un enfoque técnico, el diseño estratégico trasciende la definición de actividades aisladas, incorporando el análisis del contexto territorial, la priorización de problemáticas y la comprensión de las dinámicas sociales que condicionan la participación. Esta aproximación permite formular estrategias contextualizadas, con mayor pertinencia y capacidad de generar resultados sostenibles en los procesos participativos.
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema6/img8.svg', alt='')
          .col-lg-10
            p.mb-0 En esta lógica, el diseño de estrategias requiere considerar la articulación entre actores institucionales, comunitarios y de otros sectores, promoviendo procesos de coordinación que favorezcan la construcción colectiva de soluciones. Esta integración reduce la fragmentación de las intervenciones y contribuye a optimizar el uso de los recursos disponibles en el territorio.
    p.mb-4 Bajo esta perspectiva operativa, el diseño estratégico se traduce en los siguientes componentes clave:
    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p
            b Definir objetivos claros y alcanzable.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p
            b Identificar actores clave y sus roles.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p
            b Seleccionar metodologias pertinentes.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p
            b Establecer acciones y resultados esperados.
    p.mb-4 Además de reconocer los componentes del diseño estratégico, es importante precisar cómo se aplican en la organización de acciones participativas en salud. En el contexto colombiano, este diseño debe responder a las necesidades de la población, las capacidades de los actores y las condiciones reales del territorio, para evitar acciones aisladas o poco sostenibles.
    SlyderB.p-5.tarjeta.color-secundario(:datos="datosSlyder")
    .row.mb-5
      .col-md-6.col-lg-3.mb-4(v-for="componente in componentes" :key="componente.titulo")
        .tarjeta.bg4.h-100.p-4
          h4 {{ componente.titulo }}
          p.mb-0 {{ componente.texto }}
    p.mb-4 Estos componentes permiten que el diseño de estrategias sea más organizado, pertinente y aplicable a los territorios colombianos. Al definir objetivos, actores, metodologías y resultados, se fortalece la planeación de acciones participativas y se favorece una intervención más coherente con las necesidades de la comunidad.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Una vez definidos los elementos que orientan el diseño de estrategias, es necesario reconocer los recursos que permiten llevarlas a la práctica. Por ello, el siguiente apartado aborda la gestión de recursos, entendida como el proceso que permite organizar los medios humanos, técnicos, logísticos y financieros requeridos para desarrollar acciones participativas sostenibles en salud.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Gestión de recursos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema6/img13.png', alt='')
      .col-lg-8
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema6/img14.svg', alt='')
          .col-lg-10
            p.mb-0 La gestión de recursos en la implementación de estrategias de participación social en salud comprende el conjunto de procesos orientados a planificar, organizar y optimizar los medios necesarios para el desarrollo de las acciones participativas en el territorio. Este componente resulta fundamental para garantizar la viabilidad, continuidad y sostenibilidad de las estrategias, evitando que las acciones se limiten a iniciativas aisladas o de corto alcance.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Desde una perspectiva técnica, la gestión de recursos no se reduce a la disponibilidad de insumos, sino que implica la articulación eficiente de recursos humanos, técnicos, logísticos y financieros, en función de los objetivos definidos. Esto requiere una adecuada planificación, así como la capacidad de priorizar y asignar recursos de manera estratégica según las necesidades del contexto.
        p.mb-0 En el marco de la participación social en salud, la gestión de recursos también implica el aprovechamiento de capacidades existentes en el territorio, incluyendo el conocimiento comunitario, las redes organizativas y las alianzas interinstitucionales. Este enfoque permite ampliar el alcance de las acciones y fortalecer los procesos participativos sin depender exclusivamente de recursos externos.
    p.mb-4 Para comprender mejor la gestión de recursos en la implementación de estrategias de participación social en salud, es necesario reconocer los tipos de recursos que permiten organizar, ejecutar y sostener las acciones en el territorio. Estos recursos no se limitan al presupuesto; también incluyen capacidades humanas, herramientas técnicas, medios logísticos, saberes comunitarios y redes de colaboración que fortalecen la participación ciudadana:
    .BG03.px-5.p-5.mb-4
      .tarjeta.tarjeta--blanco.p-5
        PasosB.color-acento-contenido
          .row(titulo="")(v-for="forma in recursos" :key="forma.titulo")
            .col-lg-5.col.mb-4.mb-lg-0
              figure
                img(
                  :src="forma.figure",  alt="Imagen decorativa")
            .col-lg-7
              h5 {{ forma.titulo }}
              p.mb-4 {{ forma.texto }}
              p.mb-0 #[b Ejemplos: ]
              | {{ forma.ejemplo }}
              p.mb-0 {{ forma.ejemplo1 }}
    p.mb-4 Estos recursos permiten que la participación social en salud se desarrolle de manera organizada, viable y sostenible. En el contexto colombiano, su gestión adecuada fortalece la articulación entre instituciones y comunidad, mejora la ejecución de las estrategias y favorece respuestas más pertinentes a las necesidades de cada territorio.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Una vez identificados los recursos necesarios para desarrollar las estrategias de participación social en salud, es fundamental reconocer cómo se verifica su uso y avance durante la ejecución. Por ello, el siguiente apartado aborda el seguimiento, entendido como un proceso que permite revisar el cumplimiento de las acciones, identificar dificultades, valorar resultados parciales y realizar ajustes oportunos para fortalecer la participación en los territorios colombianos.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Seguimiento
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 El seguimiento en la implementación de estrategias de participación social en salud constituye un proceso sistemático de monitoreo que permite verificar el desarrollo de las acciones, identificar avances y detectar oportunidades de mejora durante su ejecución. Este componente es fundamental para garantizar que las estrategias se mantengan alineadas con los objetivos planteados y respondan de manera efectiva a las dinámicas del territorio.
        .cajon.color-primario.p-4
          p.mb-0 A diferencia de la evaluación final, el seguimiento se realiza de manera continua, permitiendo acompañar el desarrollo de las acciones en tiempo real. Esto facilita la toma de decisiones oportunas, la identificación de dificultades operativas y la realización de ajustes que fortalezcan la efectividad de los procesos participativos.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema6/img20.svg', alt='')
    p.mb-4 Desde una perspectiva técnica, el seguimiento permite revisar cómo avanzan las estrategias de participación social en salud y qué ajustes se requieren durante su desarrollo. Para ello, se analizan aspectos que ayudan a valorar las acciones realizadas, la participación de los actores, el uso de los recursos y los cambios logrados en el territorio:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img21.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="aspecto.titulo" v-for="(aspecto, index) in inform" :key="aspecto.titulo")
            | {{ aspecto.texto }}
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema6/img22.svg', alt='')
          .col-lg-10
            p.mb-0 Estos elementos permiten comprender que el seguimiento no se limita a revisar actividades terminadas. Su valor está en acompañar el proceso, generar información útil, identificar dificultades a tiempo y fortalecer la transparencia en la gestión de las acciones participativas en salud.
    .BG06.px-5.p-5
      .row.justify-content-center.mb-4
        .col-lg-8.order-2.order-lg-1
          p.mb-4 El seguimiento fortalece la gestión de las estrategias de participación social en salud porque permite:
          ol.lista-ol--cuadro.lista-ol--separador.mb-5
              li(v-for="item in seguimiento" :key="item.titulo")
                .lista-ol--cuadro__vineta
                  span {{item.num}}
                | {{item.titulo}}
          .cajon.color-secundario.p-4
            p.mb-0 Estos aspectos permiten comprender que el seguimiento aporta orden, claridad y mejora continua a las estrategias de participación social en salud. En el contexto colombiano, su aplicación fortalece la corresponsabilidad entre instituciones y comunidad, y favorece acciones más pertinentes frente a las necesidades del territorio.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          img(src='@/assets/curso/temas/tema6/img23.png', alt='')
    p.mb-0 A partir del seguimiento, se obtiene información útil sobre los avances, dificultades, recursos utilizados y resultados alcanzados en las estrategias de participación social en salud. Esta información permite orientar decisiones más claras, oportunas y pertinentes, basadas en las necesidades reales del territorio y en los aportes de la comunidad. Por ello, el siguiente apartado aborda la toma de decisiones, entendida como un proceso que integra evidencias, diálogo entre actores y acuerdos colectivos para mejorar la gestión de la salud en los territorios colombianos.

    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Toma de decisiones
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La toma de decisiones en el marco de la participación social en salud corresponde a un proceso articulado mediante el cual la ciudadanía, las organizaciones sociales y las instituciones intervienen en la definición de acciones que inciden en la gestión del sistema de salud. Este proceso se sustenta en el reconocimiento de la participación como un derecho fundamental y como un mecanismo que fortalece la transparencia, la pertinencia y la legitimidad de las decisiones públicas.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 En este escenario, la toma de decisiones trasciende los espacios exclusivamente institucionales y se construye a partir del diálogo, la concertación y el análisis colectivo de las problemáticas en salud. Esto permite que las decisiones adoptadas respondan de manera más efectiva a las necesidades del territorio, integrando tanto el conocimiento técnico como la experiencia de la comunidad.
    .row.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema6/img25.svg', alt='')
      .col-lg-10
        p.mb-0 Para que este proceso sea efectivo, resulta indispensable contar con información clara, oportuna y accesible, así como con escenarios de participación que faciliten la deliberación y el consenso entre los diferentes actores. De igual manera, la toma de decisiones requiere el fortalecimiento de capacidades ciudadanas que permitan analizar, priorizar y proponer alternativas de solución frente a las problemáticas en salud.
    p.mb-4 Desde una perspectiva operativa, la toma de decisiones en participación social en salud se desarrolla a través de un conjunto de acciones interrelacionadas, como se ilustra en el siguiente recurso.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Proceso de toma de decisiones en participación social en salud
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema6/img26.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema6/img261.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
    .row.justify-content-center.align-items-center.bg4.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema6/img27.png', alt='')
      .col-lg-7.tarjeta.color-primario.p-4
        .row
          .col-lg-auto.d-none.d-lg-block
            figure.mb-2
              img(src='@/assets/curso/temas/tema6/img28.svg', alt='')
          .col-lg-12
            p.mb-0 La incorporación de estos elementos contribuye a consolidar procesos más democráticos y transparentes, en los que la ciudadanía no solo participa, sino que incide de manera efectiva en la gestión del sistema de salud. De esta manera, la toma de decisiones se articula con el control social y fortalece la gobernanza en salud, promoviendo intervenciones más pertinentes, sostenibles y orientadas al bienestar colectivo.
    
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Control social
    .row.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema6/img29.svg', alt='')
      .col-lg-10
        p.mb-0 El ejercicio ciudadano de seguimiento en salud se configura como un mecanismo esencial de la participación ciudadana, mediante el cual la comunidad ejerce vigilancia, seguimiento y evaluación sobre la gestión del sistema de salud. Su finalidad es garantizar la transparencia, la calidad de los servicios y el uso adecuado de los recursos públicos, fortaleciendo la legitimidad de las acciones institucionales.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El control social permite que la ciudadanía haga seguimiento a la gestión en salud, promueva la transparencia y aporte a la mejora continua de las acciones públicas en Colombia (Ministerio de Salud y Protección Social, 2017).
    p.mb-4 Para que el control social sea efectivo, la ciudadanía requiere comprender qué puede revisar, cómo puede aportar y de qué manera sus observaciones contribuyen al mejoramiento de la gestión en salud. En el contexto colombiano, este ejercicio se fortalece cuando se realiza con información clara, participación organizada y respeto por los canales institucionales:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.p-5(v-for="fase in controles" :key="fase.titulo" :class="fase.class")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(:src="fase.figure", alt='Texto que describa la imagen')
        br
        h5.text-center {{ fase.titulo }}
        p.mb-5 {{ fase.texto }}
    p.mb-4 Estas acciones muestran que el control social no se limita a vigilar, sino que también permite construir, proponer y mejorar. Por ello, su ejercicio fortalece la corresponsabilidad entre ciudadanía e instituciones en la gestión de la salud en Colombia.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img33.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para que el control social sea efectivo, resulta indispensable garantizar el acceso a información clara, oportuna y comprensible, así como la existencia de espacios reales de participación que faciliten la interacción entre la comunidad y las instituciones. Esto implica fortalecer las capacidades ciudadanas, promover la transparencia institucional y asegurar condiciones que favorezcan el ejercicio pleno de este derecho.
    p.mb-4 De igual manera, el control social debe articularse con los mecanismos de participación existentes, porque estos permiten que la ciudadanía intervenga de forma organizada, presente observaciones y haga seguimiento a la gestión en salud. En Colombia, estos espacios fortalecen la transparencia, la corresponsabilidad y la construcción de soluciones acordes con las necesidades de la comunidad:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(:titulo="valor.titulo")(v-for="valor in informacion" :key="valor.titulo")
            .col
              p.mb-0 {{ valor.texto }}
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img34.png', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La integración de estos mecanismos permite que el control social sea más organizado, participativo y útil para la gestión en salud. Su aplicación fortalece la confianza entre ciudadanía e instituciones, promueve decisiones más transparentes y contribuye al mejoramiento de los servicios en el contexto colombiano.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    informacion: [
      {
        titulo: 'Veedurías ciudadanas',
        texto:
          'Son mecanismos mediante los cuales la ciudadanía vigila la gestión pública, el uso de recursos y el cumplimiento de compromisos institucionales. Ejemplo: una veeduría revisa si los recursos destinados a mejorar la atención en un centro de salud se ejecutan según lo informado por la entidad.',
      },
      {
        titulo: 'Asociaciones de usuarios',
        texto:
          'Son organizaciones conformadas por personas afiliadas o usuarias de los servicios de salud, que representan intereses colectivos y presentan propuestas de mejora. Ejemplo: una asociación de usuarios solicita a una IPS mejorar los tiempos de asignación de citas médicas.',
      },
      {
        titulo: 'Espacios de rendición de cuentas',
        texto:
          'Son escenarios donde las instituciones informan resultados, avances, dificultades y uso de recursos ante la ciudadanía. Ejemplo: una secretaría de salud municipal presenta los avances del Plan Territorial de Salud y responde preguntas de líderes comunitarios.',
      },
    ],
    inform: [
      {
        titulo: 'Recolección de información',
        texto:
          'Consiste en reunir datos sobre las acciones desarrolladas, los actores participantes y los avances alcanzados. Esta información permite reconocer qué se ha realizado, qué compromisos siguen pendientes y qué aspectos requieren revisión durante el proceso participativo.',
      },
      {
        titulo: 'Análisis de avances',
        texto:
          'Permite revisar si las acciones ejecutadas responden a los objetivos definidos. Este análisis ayuda a identificar logros, dificultades y oportunidades de mejora, con el fin de ajustar la estrategia antes de que finalice su implementación.',
      },
      {
        titulo: 'Participación de actores',
        texto:
          'Verifica el nivel de intervención de instituciones, organizaciones sociales, líderes comunitarios y ciudadanía. Este aspecto permite reconocer si la estrategia promueve una participación activa, incluyente y representativa de las necesidades del territorio.',
      },
      {
        titulo: 'Cumplimiento de actividades',
        texto:
          'Revisa si las jornadas, reuniones, talleres o espacios participativos se desarrollan según lo planificado. También permite identificar retrasos, cambios necesarios o acciones que deben fortalecerse para mejorar la ejecución.',
      },
      {
        titulo: 'Uso de recursos',
        texto:
          'Analiza si los recursos humanos, técnicos, logísticos, financieros y comunitarios se utilizan de manera adecuada. Esta revisión favorece una gestión más organizada, transparente y pertinente para el desarrollo de las acciones participativas.',
      },
      {
        titulo: 'Resultados obtenidos',
        texto:
          'Permite identificar los cambios que se alcanzan durante el proceso participativo. Esta revisión muestra si la comunidad participa más, si la información se comprende mejor, si los compromisos avanzan y si las acciones responden a las necesidades del territorio.',
      },
      {
        titulo: 'Transparencia en la gestión',
        texto:
          'Fortalece la confianza entre instituciones y comunidad, al generar evidencia sobre los avances, los recursos utilizados y los compromisos cumplidos. Este aspecto facilita el control social y mejora la credibilidad del proceso participativo.',
      },
    ],
    gestiones: [
      {
        titulo: 'Planificación de actividades',
        texto:
          'Permite definir qué acciones se realizarán, quiénes participarán, en qué tiempos y con qué recursos. Esta organización evita la improvisación y facilita que los procesos participativos respondan a objetivos claros y necesidades reales de la comunidad.',
      },
      {
        titulo: 'Articulación interinstitucional',
        texto:
          'Favorece el trabajo conjunto entre entidades del sector salud, instituciones públicas y otros actores del territorio. Esta coordinación permite unir esfuerzos, evitar duplicidad de acciones y fortalecer respuestas más integradas frente a las problemáticas en salud.',
      },
      {
        titulo: 'Acompañamiento a actores sociales',
        texto:
          'Consiste en orientar y apoyar a líderes, organizaciones comunitarias y ciudadanía durante el desarrollo de los procesos participativos. Este acompañamiento fortalece capacidades, mejora la comprensión de los mecanismos de participación y promueve una intervención más activa.',
      },
      {
        titulo: 'Consolidación de redes de participación',
        texto:
          'Permite conectar instituciones, organizaciones sociales y comunidad para sostener el trabajo colaborativo en el tiempo. Estas redes facilitan el intercambio de información, el seguimiento de compromisos y la construcción de soluciones colectivas en salud.',
      },
    ],
    datosSlyder: [
      {
        titulo: 'Objetivos claros y alcanzables',
        texto:
          'Permiten definir el propósito de la estrategia y los resultados que se esperan lograr. En salud, ayudan a orientar las acciones hacia necesidades concretas, como mejorar la participación comunitaria, fortalecer la información ciudadana o promover el seguimiento a compromisos institucionales.',
        imagen: require('@/assets/curso/temas/tema6/img9.png'),
      },
      {
        titulo: 'Actores clave y roles',
        texto:
          'Facilitan identificar quiénes participan, qué responsabilidades asumen y cómo se articulan en el proceso. Este aspecto permite vincular instituciones, organizaciones sociales, líderes comunitarios y ciudadanía, evitando duplicidad de esfuerzos y fortaleciendo el trabajo conjunto en el territorio.',
        imagen: require('@/assets/curso/temas/tema6/img10.png'),
      },
      {
        titulo: 'Metodologías pertinentes',
        texto:
          'Orientan la forma en que se desarrollarán las acciones participativas, de acuerdo con el contexto y la población. Pueden incluir mesas de diálogo, talleres comunitarios, diagnósticos participativos o encuentros territoriales, siempre con lenguaje claro y enfoque incluyente.',
        imagen: require('@/assets/curso/temas/tema6/img11.png'),
      },
      {
        titulo: 'Acciones y resultados esperados',
        texto:
          'Permiten establecer qué actividades se realizarán y qué cambios se buscan alcanzar. Este componente ayuda a verificar si la estrategia aporta a la participación informada, al control social, a la toma de decisiones y al mejoramiento de la gestión en salud.',
        imagen: require('@/assets/curso/temas/tema6/img12.png'),
      },
    ],
    recursos: [
      {
        figure: require('@/assets/curso/temas/tema6/img14.png'),
        titulo: 'Recurso humano',
        texto:
          'Corresponde al talento de las personas que orientan, facilitan y acompañan los procesos participativos. Incluye funcionarios, líderes comunitarios, facilitadores, representantes de organizaciones sociales y ciudadanía activa.',
        ejemplo:
          'Una secretaría de salud convoca a líderes veredales para apoyar una jornada comunitaria.',
        ejemplo1:
          'Un equipo de promotores sociales orienta a usuarios sobre mecanismos de participación.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img15.png'),
        titulo: 'Recurso técnico',
        texto:
          'Comprende herramientas, metodologías, instrumentos y soportes tecnológicos que ayudan a organizar la información, desarrollar actividades y hacer seguimiento a los procesos participativos.',
        ejemplo:
          'Se aplica una encuesta digital para identificar barreras de acceso a servicios de salud.',
        ejemplo1:
          'Se utiliza una matriz de priorización para organizar las necesidades expresadas por la comunidad.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img16.png'),
        titulo: 'Recurso logístico',
        texto:
          'Hace referencia a los medios operativos y materiales necesarios para realizar encuentros, talleres, mesas de diálogo o jornadas comunitarias.',
        ejemplo:
          'Se gestiona el salón comunal, las sillas y el sonido para una reunión con usuarios.',
        ejemplo1:
          'Se preparan carteles, listados de asistencia y materiales impresos para un taller participativo.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img17.png'),
        titulo: 'Recurso financiero',
        texto:
          'Corresponde a los recursos económicos disponibles para financiar actividades, materiales, desplazamientos, facilitadores y acciones de seguimiento.',
        ejemplo:
          'Una alcaldía asigna presupuesto para talleres de control social en salud.',
        ejemplo1:
          'Una entidad territorial destina recursos para el transporte de líderes rurales que participan en mesas de diálogo.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img18.png'),
        titulo: 'Recurso comunitario',
        texto:
          'Integra saberes, experiencias, capacidades y conocimientos locales de la población. Este recurso permite que las acciones respondan a la realidad del territorio.',
        ejemplo:
          'Una comunidad campesina informa sobre los horarios adecuados para convocar reuniones.',
        ejemplo1:
          'Líderes barriales identifican necesidades prioritarias en atención, comunicación y acceso a servicios.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img19.png'),
        titulo: 'Recurso relacional',
        texto:
          'Se refiere a las redes, alianzas y vínculos entre instituciones, organizaciones sociales, líderes y comunidad. Facilita la cooperación y la sostenibilidad de los procesos participativos.',
        ejemplo:
          'Una asociación de usuarios y una junta de acción comunal acuerdan hacer seguimiento a compromisos locales.',
        ejemplo1:
          'Una entidad de salud articula acciones con colegios y organizaciones comunitarias.',
      },
    ],
    seguimiento: [
      {
        num: 'A',
        titulo:
          'Revisar el proceso mientras se desarrolla, no solo al finalizar. ',
      },
      {
        num: 'B',
        titulo: 'Reconocer avances en las acciones participativas. ',
      },
      {
        num: 'C',
        titulo: 'Identificar dificultades que requieren atención oportuna. ',
      },
      {
        num: 'D',
        titulo: 'Justar actividades según las necesidades del territorio. ',
      },
      {
        num: 'E',
        titulo:
          'Generar información útil para instituciones, organizaciones sociales y comunidad. ',
      },
      {
        num: 'F',
        titulo:
          'Tomar decisiones más pertinentes, transparentes y acordes con la realidad local.',
      },
    ],
    controles: [
      {
        figure: require('@/assets/curso/temas/tema6/img30.svg'),
        class: 'color-primario',
        titulo: 'Seguimiento ciudadano',
        texto:
          'Permite observar el cumplimiento de planes, programas, compromisos y servicios relacionados con la salud. Esta acción ayuda a identificar avances, retrasos o situaciones que requieren atención por parte de las instituciones responsables.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img31.svg'),
        class: 'color-secundario',
        titulo: 'Vigilancia de recursos',
        texto:
          'Consiste en revisar que los recursos públicos destinados a la salud se utilicen de manera adecuada, transparente y acorde con las necesidades de la comunidad. Su aplicación fortalece la confianza y previene usos inadecuados.',
      },
      {
        figure: require('@/assets/curso/temas/tema6/img32.svg'),
        class: 'bg1',
        titulo: 'Aporte de recomendaciones',
        texto:
          'Permite que la ciudadanía presente observaciones, propuestas o alertas para mejorar la gestión en salud. Estas recomendaciones contribuyen a corregir dificultades, fortalecer la calidad de los servicios y promover decisiones más pertinentes.',
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
