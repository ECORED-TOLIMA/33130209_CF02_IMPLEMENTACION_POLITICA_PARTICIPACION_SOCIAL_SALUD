<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Actores y escenarios de participación
    .BG05.px-5.p-5.mb-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-8.mb-4.mb-lg-0
          img(src="@/assets/curso/temas/tema3/img1.png", alt="Actores y escenarios de participación en salud")
        .col-lg-7
          .row
            .col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
            .col-lg-10
              p La gestión de la participación en salud requiere la identificación y articulación de diversos actores que intervienen en los procesos de toma de decisiones, así como el reconocimiento de los escenarios en los que se desarrollan dichas interacciones. Este componente permite comprender cómo se configuran las dinámicas participativas en los territorios y cómo se establecen relaciones entre instituciones, organizaciones sociales y ciudadanía.
          p.mb-0 Desde una perspectiva operativa, los actores corresponden a los sujetos individuales o colectivos que inciden en la gestión del sistema de salud, mientras que los escenarios hacen referencia a los espacios formales e informales en los que se desarrollan los procesos participativos. La adecuada articulación entre estos elementos favorece la construcción de procesos más incluyentes, organizados y con mayor capacidad de incidencia.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          .row
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='')
            .col-lg-9
              p.mb-0 En el contexto colombiano, reconocer los actores y escenarios de participación permite orientar mejor las acciones comunitarias e institucionales. Este análisis ayuda a identificar quiénes pueden aportar información, liderazgo, experiencia territorial o capacidad de gestión, y en qué espacios pueden construirse acuerdos, hacer seguimiento a compromisos y proponer soluciones frente a las necesidades en salud.
    p.mb-4 Para comprender esta relación, es importante tener en cuenta algunos elementos que facilitan la organización de la participación social en salud
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BG04.p-4(v-for="elemento in elementos" :key="elemento.titulo")
        .row.justify-content-center.mb-3
          .col-5
            img(:src="elemento.figure" :alt="elemento.titulo")
        br
        h5.text-center {{ elemento.titulo }}
        p.text-center {{ elemento.texto }}
        br
        br
        br
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img10.svg', alt='')
          .col-lg-10
            p.mb-4 Estos elementos permiten comprender que la participación social en salud depende tanto de los actores que intervienen como de los espacios donde se desarrolla el diálogo. Por ello, resulta necesario avanzar hacia el mapa de actores, herramienta que facilita identificar, clasificar y analizar las relaciones entre quienes participan en los procesos de gestión en salud.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Mapa de actores
    p.mb-4 La gestión de la participación en salud requiere la identificación y articulación de diversos actores que intervienen en los procesos de toma de decisiones, así como el reconocimiento de los escenarios en los que se desarrollan dichas interacciones. Este aspecto permite comprender cómo se configuran las dinámicas participativas en los territorios y cómo se establecen relaciones entre instituciones, organizaciones sociales y ciudadanía.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde una perspectiva operativa, los actores corresponden a sujetos individuales o colectivos que inciden en la gestión del sistema de salud, mientras que los escenarios hacen referencia a espacios formales e informales donde se desarrollan los procesos participativos. La adecuada articulación entre estos elementos favorece la construcción de procesos más incluyentes, organizados y con mayor capacidad de incidencia.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          .row
            .col-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema3/img12.svg', alt='')
            .col-lg-9
              p.mb-0 En el contexto colombiano, reconocer los actores y escenarios de participación permite orientar mejor las acciones comunitarias e institucionales. Este análisis ayuda a identificar quiénes pueden aportar información, liderazgo, experiencia territorial o capacidad de gestión, y en qué espacios pueden construirse acuerdos, hacer seguimiento a compromisos y proponer soluciones frente a las necesidades en salud.
    p.mb-4 Para comprender esta relación, es importante tener en cuenta algunos elementos que facilitan la organización de la participación social en salud:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Mapa de actores en la participación en salud
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img13.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
        .d-block.d-lg-none.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema3/img13.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
    p La construcción del mapa de actores permite disponer de una base organizada para la gestión de la participación, facilitando la articulación entre actores y la planificación de acciones en salud. A partir de este insumo, resulta necesario profundizar en el análisis e interpretación de los actores, con el fin de comprender su nivel de influencia, intereses y capacidad de incidencia en los procesos participativos.
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Análisis e interpretación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img14.png', alt='Análisis e interpretación de actores en la participación en salud')
      .col-lg-8
        p.mb-4 El análisis e interpretación de actores constituye una fase clave dentro de la gestión de la participación en salud, orientada a comprender el rol estratégico de cada actor en función de su capacidad de incidencia en los procesos participativos. Este análisis permite trascender la identificación básica, para profundizar en las relaciones, intereses y dinámicas que influyen en la toma de decisiones en el territorio.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Desde un enfoque metodológico, el análisis de actores incorpora variables como el nivel de poder, el grado de interés, la legitimidad social, la disponibilidad de recursos y la capacidad de articulación. La valoración de estos elementos facilita clasificar a los actores según su influencia y definir estrategias diferenciadas para su vinculación, fortalecimiento o gestión dentro de los procesos participativos.
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block 
            img(src='@/assets/curso/temas/tema3/img15.svg', alt='')
          .col-lg-10
            p.mb-0 En este marco, la interpretación de actores implica reconocer no solo su posición dentro del sistema, sino también las interacciones que se generan entre ellos, incluyendo relaciones de cooperación, complementariedad o conflicto. Este ejercicio resulta fundamental para anticipar escenarios, gestionar riesgos y potenciar alianzas estratégicas que favorezcan el desarrollo de acciones coordinadas en salud.
    p.mb-4 Para que el análisis de actores sea útil en la gestión de la participación social en salud, es necesario revisar algunos criterios que permiten comprender su papel en el territorio. Estos criterios ayudan a identificar capacidades, relaciones, intereses y posibilidades de articulación en el contexto colombiano:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img15.png', alt='')
      .col-lg-7.order-2.order-lg-1
         LineaTiempoD.color-acento-botones
          p(:numero="index + 1" :titulo="criterio.titulo" v-for="(criterio, index) in criterios" :key="criterio.titulo")
            | {{ criterio.texto }}
    p.mb-4 El análisis e interpretación de actores permite comprender mejor las relaciones que influyen en la participación social en salud. Su aplicación ayuda a reconocer posibles riesgos, fortalecer alianzas y orientar acciones más organizadas, incluyentes y acordes con las necesidades de cada territorio.
    .row.justify-content-center
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img16.png', alt='Mapa de actores en la participación en salud')
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Reconocer a los actores del territorio facilita la construcción de acuerdos y el trabajo conjunto entre instituciones, organizaciones sociales y comunidad. Esta lectura fortalece la participación social en salud y permite orientar acciones más pertinentes para la población colombiana.
        p.mb-0 Después de identificar los actores, sus relaciones y los espacios donde se desarrolla la participación, es necesario abordar la educación y la comunicación como procesos de apoyo. Estos elementos permiten informar, formar y promover el diálogo ciudadano para fortalecer la participación social en salud en los territorios colombianos.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    elementos: [
      {
        figure: require('@/assets/curso/temas/tema3/img4.svg'),
        titulo: 'Actores institucionales',
        texto:
          'Entidades públicas o privadas que orientan, gestionan o acompañan acciones relacionadas con la salud.',
      },
      {
        figure: require('@/assets/curso/temas/tema3/img5.svg'),
        titulo: 'Actores comunitarios',
        texto:
          'Líderes, organizaciones sociales, asociaciones de usuarios y ciudadanía que aportan necesidades y propuestas.',
      },
      {
        figure: require('@/assets/curso/temas/tema3/img6.svg'),
        titulo: 'Escenarios formales',
        texto:
          'Espacios reconocidos por la normatividad o por la gestión institucional para dialogar y hacer seguimiento.',
      },
      {
        figure: require('@/assets/curso/temas/tema3/img7.svg'),
        titulo: 'Escenarios informales',
        texto:
          'Encuentros comunitarios, reuniones barriales o espacios locales donde se expresan necesidades.',
      },
      {
        figure: require('@/assets/curso/temas/tema3/img8.svg'),
        titulo: 'Intereses y relaciones',
        texto:
          'Vínculos, expectativas y responsabilidades que permiten comprender cómo interactúan los actores.',
      },
      {
        figure: require('@/assets/curso/temas/tema3/img9.svg'),
        titulo: 'Capacidad de incidencia',
        texto:
          'Posibilidad de influir en decisiones, acuerdos, acciones y procesos de mejora relacionados con la salud.',
      },
    ],
    criterios: [
      {
        titulo: 'Nivel de poder',
        texto:
          'Permite reconocer la capacidad que tiene cada actor para influir en decisiones, recursos o acciones en salud. En Colombia, este análisis ayuda a diferenciar actores con funciones institucionales, liderazgo comunitario o capacidad de movilización social.',
      },
      {
        titulo: 'Grado de interés',
        texto:
          'Identifica la motivación de cada actor frente al proceso participativo. Este criterio permite reconocer quiénes desean participar activamente, quiénes requieren más información y quiénes pueden aportar propuestas para mejorar las acciones en salud.',
      },
      {
        titulo: 'Legitimidad social',
        texto:
          'Valora el reconocimiento que tiene cada actor dentro de la comunidad o la institución. Este aspecto es importante porque facilita la confianza, el diálogo y la aceptación de acuerdos construidos en los espacios participativos.',
      },
      {
        titulo: 'Disponibilidad de recursos',
        texto:
          'Permite identificar los recursos humanos, técnicos, logísticos, comunicativos o comunitarios que cada actor puede aportar. En los territorios colombianos, este criterio ayuda a planear acciones viables y sostenibles.',
      },
      {
        titulo: 'Capacidad de articulación',
        texto:
          'Reconoce la posibilidad que tiene cada actor para trabajar con otros, construir acuerdos y participar en redes. Este criterio fortalece la coordinación entre instituciones, organizaciones sociales, líderes y ciudadanía.',
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
