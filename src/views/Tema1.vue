<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ingredientes y aditivos no cárnicos


    .bg-full-width.bg-fondo-1
      .px-5.pb-5

        p(data-aos="fade-right").mb-5 Los ingredientes utilizados en la elaboración de productos cárnicos como sal, azúcar, especias, condimentos, entre otros, ayudan a potenciar el sabor de estos alimentos, mejorando sus características organolépticas. Estos se pueden utilizar sin límite de dosificación ya que son poco tóxicos para el ser humano.



        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la elaboración de derivados cárnicos también se utiliza una serie de aditivos, los cuales se definen como sustancias elaboradas por síntesis química u obtenidas por fuentes naturales, que son agregados a los derivados cárnicos para potenciar el sabor, proporcionar propiedades de textura, mejorar el producto en la preparación y conservarlo, con el fin de prolongar su vida útil en la distribución, almacenamiento y transporte.


        p(data-aos="fade-right") #[strong Los aditivos se pueden clasificar de la siguiente manera:]


        .row.align-items-stretch.justify-content-center.mb-4
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Colorantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antioxidantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Espesantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Estabilizantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Acidificantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antiaglomerantes

        .row.align-items-stretch.justify-content-center.mb-4
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Polvos gasificantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Agentes de revestimiento
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Agentes de tratamiento de las harinas
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Exaltadores de aroma
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Edulcorantes artificiales
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Fosfatos

        .row.align-items-stretch.justify-content-center.mb-4
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Conservadores
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Emulgentes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Gelificantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Exaltadores del sabor
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Correctores de acidez
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Almidones modificados

        .row.align-items-stretch.justify-content-center.mb-5
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antiespumantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Sales de fusión
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Aromatizantes
          .col-md-4.col-lg-2
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Enzimas


        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 1.
              span Aditivos de uso permitido en productos cárnicos procesados


            .tabla-a.color-acento-contenido.mb-3
              table
                thead
                  tr(style="background-color: #FCF8DE; color: #000;")
                    th Sustancia
                    th Ejemplo de función tecnológica
                    th Cantidad máxima admisible y restricción de uso
                tbody
                  tr
                    td Ácido ascórbico, ascorbato de sodio y eritorbato de sodio
                    td Aceleradores de curación, disminuyen el contenido de nitritos residuales
                    td BPM (Buenas Prácticas de Manufactura)
                  tr
                    td Ácido cítrico y citrato de sodio
                    td Anticoagulante, acidificante, antioxidante
                    td Sustancia GRAS (Sustancia reconocida como no riesgosa (Generally Recognized as Safe)) - BPM
                  tr
                    td Ácido láctico, lactato de sodio, lactato de potasio
                    td Conservantes naturales, disminuyen la actividad del agua
                    td Sustancia GRAS - BPM siempre y cuando se utilice lactato
                  tr
                    td Diacetato de sodio
                    td Conservantes naturales, disminuyen la actividad del agua
                    td 2,5 % fracción de masa máximo como diacetato de sodio, en productos en proceso. Sustancia GRAS.
                  tr
                    td BHA (Butilhidroxianisol) y BHT (Butilhidroxitolueno)
                    td Antioxidantes
                    td Solo o en combinación 0,01 % fracción de masa, máximo referido al contenido de grasa, en productos frescos. Solo o en combinación 0,003 % fracción de masa máximo en productos deshidratados.


        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4(data-aos="fade-up") Agua o hielo
          
        p(data-aos="fade-up").mb-4 El agua es un ingrediente muy importante cuando se elaboran productos cárnicos, pues permite que se formen soluciones coloidales y verdaderas. Debido a su polaridad, se fija con facilidad a las proteínas de la carne, además de aportar jugosidad y suavidad a los derivados cárnicos.

        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/2.png', alt='', data-aos="zoom-in")
                .col-lg
                  .p-4
                    p.mb-3(data-aos="fade-up") #[strong Las principales funciones del agua en los derivados cárnicos son:]

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Sirve como disolvente de la sal y los demás ingredientes en una formulación cárnica.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | El hielo permite mantener la estabilidad y la temperatura baja en una emulsión.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Ayuda a reducir costos de producción en la elaboración de derivados cárnicos.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
