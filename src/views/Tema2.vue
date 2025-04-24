<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El ahumado


    .bg-full-width.bg-fondo-2
      .px-5.pb-5

        p(data-aos="fade-right").mb-5 El ahumado es un método de conservación que se utiliza combinado con otro método, el curado, el cual consiste en adicionar humo (natural o artificial) para mejorar las propiedades organolépticas y la conservación de los productos cárnicos.



        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El humo contiene sustancias con acción bactericida y proporciona a la carne curada, deshidratada o salada <b>color, olor y sabor característicos</b>. Se produce por la combustión incompleta de madera dura, como el roble, cedro y olmo, o bien por métodos industriales que generan <b>humo líquido o en polvo</b>.


        p(data-aos="fade-right").mb-4 El humo se deposita en la superficie del producto y sus sustancias desinfectantes penetran en la carne, ejerciendo una acción bactericida. Se considera un complemento del curado (Ramírez, 2006).


        .row.justify-content-center.mb-3
          .col-lg-10
            .bg-color-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/12.png', alt='', data-aos="zoom-in")
                .col-lg
                  .p-4

                    p(data-aos="fade-up").mb-4 Los componentes del humo son: 

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Fenoles:] (guayacol, cresol, fenol, entre otros).
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Alcoholes:] (metílico y etílico).
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Ácidos orgánicos:] (fórmico, acético y butírico, entre otros).
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Compuestos de carbonilo:] (butanol, acetona, furfural).
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Compuestos de hidrocarburos:] (benzopirenos).

    p(data-aos="fade-right").mb-4 #[strong Las funciones del ahumado:]

    .bg-full-width.bg-fondo-7
      .px-4.px-md-5.pb-5

        .carousel-bg
          .row.justify-content-around.align-items-center.my-5
            .col-lg-11
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-up")
                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-1.png', style="max-width: 143px", alt='').mx-auto.mb-4

                  p.text-center #[strong Desarrollo del color] en los productos cárnicos.


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-2.png', style="max-width: 143px", alt='').mx-auto.mb-4
                  p.text-center #[strong Preservación] mediante #[strong actividad antimicrobiana].

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-3.png', style="max-width: 143px", alt='').mx-auto.mb-4
                  p.text-center #[strong Creación de nuevos productos] con características sensoriales diferenciadas.


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-4.png', style="max-width: 143px", alt='').mx-auto.mb-4
                  p.text-center #[strong Desarrollo de aroma y sabor] a través de compuestos aromáticos volátiles.


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-5.png', style="max-width: 143px", alt='').mx-auto.mb-4
                  p.text-center #[strong Protección contra la oxidación], evitando el desarrollo de rancidez.

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/icon-6.png', style="max-width: 143px", alt='').mx-auto.mb-4
                  p.text-center #[strong Cambio de textura], formando una corteza más firme.



        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Clases de ahumado

        p(data-aos="fade-up").mb-4 Según el tipo, tamaño del producto y características deseadas, se aplican diferentes tipos de ahumado.


    .bg-full-width.bg-fondo-8
      .px-4.px-md-5.pb-5
        .row.justify-content-center.mb-5
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/2.png', alt='', data-aos="zoom-in")

          .col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-3")
              div(titulo="Ahumado en frío")
                p.mb-0 Se realiza a temperaturas entre #[strong 12 °C y 30 °C]. Es un proceso lento y costoso, cuya duración puede extenderse desde #[strong dos horas] hasta #[strong varias horas], dependiendo del producto.

              div(titulo="Ahumado en caliente")
                p.mb-3 Se lleva a cabo con vapor de agua, energía eléctrica (resistencia), gas, entre otros. En métodos modernos se controla la consistencia del humo, la humedad relativa y la temperatura.


                ul.lista-ul--color.mb-3
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | #[strong Temperatura:] 60 °C
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | #[strong Duración:] 2 a 4 horas
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | #[strong Para productos como cábanos:] 45 a 90 °C
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | #[strong Para embutidos frescos de corta conservación (chorizo, longaniza):] 60 a 100 °C

              div(titulo="Ahumado artificial (humo químico)")
                p.mb-0 Se utiliza humo líquido, obtenido por combustión controlada del humo natural. Durante este proceso se eliminan compuestos #[strong cancerígenos] como los #[strong benzopirenos].



        .row.justify-content-center
          .col-lg-10

            .bg-color-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg
                  .p-4

                    p(data-aos="fade-up").mb-4 #[strong Los métodos de aplicación del humo líquido son:]

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Directo sobre la masa:] en el momento de mezclado y/o cueteado para lograr mayor homogenización.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Inmersión:] tiempo máximo de dos minutos. Exceder este tiempo puede generar cambios no deseados en el sabor.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Duchado:] el humo se aplica junto con agua, a través de una motobomba atomizadora.


                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/3.png', alt='', data-aos="zoom-in")
</template>

<script>
export default {
  name: 'Tema2',
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
