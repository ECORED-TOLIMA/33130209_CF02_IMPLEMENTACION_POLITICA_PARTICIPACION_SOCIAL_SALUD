<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        figure.intro-img.intro-img--left
          img(src="@/assets/curso/temas/intro/img1.png", alt="Personas uniendo sus manos en señal de cooperación")
      .col-lg-7(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La implementación y el fortalecimiento de la participación ciudadana en salud constituyen procesos estratégicos para consolidar sistemas de salud más equitativos, eficientes y centrados en las necesidades de la población. A partir de los fundamentos normativos de la participación social en salud, este componente aborda la organización y el desarrollo de acciones participativas en los territorios mediante estrategias, metodologías y mecanismos concretos.
        p.mb-0 En este sentido, la participación social deja de ser un principio teórico para convertirse en un proceso operativo que requiere planificación, articulación entre actores, desarrollo de capacidades y uso adecuado de herramientas pedagógicas y comunicativas. La gestión efectiva de estos procesos permite fortalecer la toma de decisiones en salud, optimizar el uso de los recursos públicos y promover el ejercicio activo del control social por parte de la ciudadanía.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A lo largo del componente se abordan elementos fundamentales como las estrategias de participación, la identificación de actores, la educación y comunicación en salud, así como los mecanismos que facilitan la incidencia ciudadana en la gestión del sistema. Estos contenidos permiten comprender cómo se estructuran y dinamizan los procesos participativos en contextos territoriales.
        br
        br
        p.mb-0 De esta manera, se establece una base metodológica que orienta la implementación de acciones participativas en salud, facilita la construcción de escenarios de diálogo, concertación y corresponsabilidad, y fortalece la relación entre las instituciones y la comunidad para la garantía del derecho a la salud.
        
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/3moiouZDJD0" title="Implementación y fortalecimiento de la participación ciudadana en salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
           
</template>

<script>
export default {
  name: 'Introduccion',
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
<style lang="sass" scoped></style>
