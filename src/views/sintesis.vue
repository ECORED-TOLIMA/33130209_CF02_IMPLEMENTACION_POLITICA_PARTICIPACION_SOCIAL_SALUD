<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La implementación y fortalecimiento de la participación ciudadana en salud permite comprender cómo se organizan, gestionan y consolidan los procesos participativos en los territorios colombianos. Este componente aborda la gestión de la participación, las estrategias en salud, los actores y escenarios, la educación y comunicación, las acciones y mecanismos, así como la implementación, gestión y control social. En síntesis, estos contenidos orientan la articulación entre instituciones, organizaciones sociales y ciudadanía, mediante metodologías participativas, comunicación clara, formación ciudadana, seguimiento de compromisos y toma de decisiones informadas para aportar al bienestar colectivo y a la garantía del derecho a la salud. A continuación, el mapa conceptual presenta la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre la implementación y fortalecimiento de la participación ciudadana en salud. Presenta seis ejes: gestión de la participación, estrategias en salud, actores y escenarios, educación y comunicación, acciones y mecanismos, e implementación, gestión y control social. Cada eje organiza subtemas que explican cómo se planifican, articulan y fortalecen los procesos participativos en los territorios colombianos. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg", alt="")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
