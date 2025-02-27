<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center
      .col-lg-10.mb-5.tarjeta.bg-color-sintesis.p-4.p-lg-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama detalla ingredientes y aditivos no cárnicos que mejoran sabor, textura, conservación y estabilidad. Incluye agua, sal, nitritos, azúcar, estabilizadores, antioxidantes y especias, destacando su función en retención de agua, realce del sabor y conservación mediante fosfatos, gomas y sales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
