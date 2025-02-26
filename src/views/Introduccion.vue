<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1
      .px-5.pb-5
        p(data-aos="fade-right").mb-4 Los aditivos e ingredientes desempeñan un papel fundamental en la fabricación de productos cárnicos, mejorando su sabor, textura y conservación. Elementos como la sal, el azúcar, los fosfatos y los antioxidantes permiten prolongar la vida útil de los productos y optimizar su calidad, garantizando características organolépticas atractivas para el consumidor.

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-8
            .bg-color-4.p-4.h-100
              p(data-aos="fade-right").mb-0 Además de los aditivos, el ahumado es una técnica ampliamente utilizada en la industria cárnica para conferir aroma y color a los alimentos. Existen distintos tipos de ahumado, como el frío, caliente y artificial, cada uno con efectos específicos en la textura y estabilidad del producto. Este proceso no solo mejora el aspecto sensorial, sino que también contribuye a la conservación mediante la reducción de microorganismos.

          .col-lg-4
            figure
              img(src="@/assets/curso/intro/1.png", alt="alt", data-aos="zoom-in").mx-auto.mt-4.mt-lg-0

        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/intro/2.svg", alt="alt", data-aos="zoom-in").mx-auto.mb-4.mb-lg-0

          .col
            p(data-aos="fade-right") El uso de estos ingredientes y técnicas está regulado por normativas como la NTC 1325, que establece límites y condiciones para garantizar la seguridad alimentaria. Comprender la función de los aditivos y métodos de procesamiento es clave para el desarrollo de productos cárnicos de alta calidad y con estándares adecuados para su comercialización.



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
