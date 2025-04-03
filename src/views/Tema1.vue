<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ingredientes y aditivos no cárnicos


    .bg-full-width.bg-fondo-2
      .px-5.pb-5

        p(data-aos="fade-right").mb-5 Los ingredientes utilizados en la elaboración de productos cárnicos como sal, azúcar, especias, condimentos, entre otros, ayudan a potenciar el sabor de estos alimentos, mejorando sus características organolépticas. Estos se pueden utilizar sin límite de dosificación ya que son poco tóxicos para el ser humano.



        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la elaboración de derivados cárnicos también se utiliza una serie de aditivos, los cuales se definen como sustancias elaboradas por síntesis química u obtenidas por fuentes naturales, que son agregados a los derivados cárnicos para potenciar el sabor, proporcionar propiedades de textura, mejorar el producto en la preparación y conservarlo, con el fin de prolongar su vida útil en la distribución, almacenamiento y transporte.


        p(data-aos="fade-right") #[strong Los aditivos se pueden clasificar de la siguiente manera:]


        .row.align-items-stretch.justify-content-center
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Colorantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antioxidantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Espesantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Estabilizantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Acidificantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antiaglomerantes

        .row.align-items-stretch.justify-content-center
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Polvos gasificantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4 
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Agentes de revestimiento
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Agentes de tratamiento de las harinas
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Exaltadores de aroma
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Edulcorantes artificiales
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Fosfatos

        .row.align-items-stretch.justify-content-center
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Conservadores
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Emulgentes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Gelificantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Exaltadores del sabor
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Correctores de acidez
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Almidones modificados

        .row.align-items-stretch.justify-content-center
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Antiespumantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Sales de fusión
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Aromatizantes
          .col-6.col-md-4.col-xl-2.mb-3.mb-md-4
            .bg-color-primario.px-4.py-5.h-100
              h5.text-center.mb-0 Enzimas


    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Aditivos de uso permitido en productos cárnicos procesados.


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
        .bg-color-1(data-aos="fade-up")
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

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") La Sal


    .bg-full-width.bg-fondo-2
      .px-5.pb-5

        .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La sal ha sido utilizada desde tiempos antiguos para prolongar la vida útil de la carne, ya que disminuye la actividad del agua, evitando el crecimiento bacteriano. En productos embutidos, la sal es indispensable porque contribuye al sabor y ayuda en la conservación.

        .row.justify-content-center.mb-4
          .col-lg-10
            .tarjeta.bg-color-6.p-4
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='', data-aos="zoom-in" style="max-width: 90px").mb-4.mb-lg-0.mx-auto
                .col-lg
                  p.mb-0(data-aos="fade-up").text-white Se ha establecido que, para que la sal actúe como conservante, debe añadirse un 17 % de salmuera al producto. En embutidos, la proporción utilizada varía entre 2,5 % y 3,0 %. Un porcentaje mayor podría generar un sabor demasiado salado.


        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-color-1(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg
                  .p-4
                    p.mb-3(data-aos="fade-up") #[strong Funciones de la sal en los productos cárnicos:]

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Aumenta la capacidad de retención de agua (CRA) de la carne, desplazando el punto isoeléctrico a un pH de 4,5, lo que incrementa el poder emulsionante de las proteínas.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Mejora el sabor.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Favorece la liberación de proteínas contráctiles con la adición de concentraciones de salmuera aproximadamente del 8 %.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/5.png', alt='', data-aos="zoom-in")

        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Nitratos y nitritos


        .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los nitratos y nitritos son sales de curación que contribuyen a la conservación de los derivados cárnicos debido a su efecto bactericida, lo que impide el crecimiento de Clostridium botulinum. Además, otorgan a los productos cárnicos su característico color rosado y evitan la rancidez durante el almacenamiento.

        p(data-aos="fade-up").mb-4 Sin la adición de estas sales no sería posible producir jamones enlatados no esterilizados ni productos cocidos empacados al vacío como la salchicha Frankfurt. Los productos terminados no deben contener más de 50 a 125 ppm (partes por millón) de nitrato residual. En Colombia, el Ministerio de Protección Social permite el uso de hasta 200 mg/kg en productos crudos y 180 mg/kg en pastas.

        
        .row.justify-content-center.mb-5
          .col-lg-10
            .tarjeta.bg-color-6.p-4
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='', data-aos="zoom-in" style="max-width: 90px").mb-4.mb-lg-0.mx-auto
                .col-lg
                  h5.mb-2.text-white Precaución
                  p.mb-0(data-aos="fade-up").text-white El uso de nitritos en exceso puede generar la formación de nitrosaminas, compuestos altamente cancerígenos. Por esta razón, su uso debe ser controlado estrictamente.


        .bg-full-width.bg-fondo-4
          .px-5.pb-5

            .titulo-tres.mb-4(data-aos="flip-up").mb-4
              h4(data-aos="fade-up") Fosfatos
              
            p(data-aos="fade-up").mb-4 Los fosfatos se utilizan en la industria cárnica para aumentar la retención de humedad, formar emulsiones estables y desarrollar una estructura más firme en los productos procesados.


            .bg-color-1(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/7.png', alt='', data-aos="zoom-in")
                .col-lg
                  .p-4
                    p.mb-4(data-aos="fade-up") La principal función de los fosfatos en las carnes procesadas está relacionada con su acción sobre el pH de la carne, otorgando una textura elástica similar a la de los animales recién sacrificados. La norma NTC 1325 (2008) permite hasta 5 gramos de polifosfatos por kilogramo de producto.

                    p.mb-4(data-aos="fade-up") #[strong Lista de fosfatos aprobados para su uso en la industria cárnica:]

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Tripolifosfato de sodio.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Hexametafosfato de sodio.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Pirofosfato de sodio.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Fosfato monosódico.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Fosfato disódico.
                    
        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Ascorbatos y eritorbatos

        p(data-aos="fade-up").mb-4 Los ascorbatos y eritorbatos se utilizan como aceleradores de la formación de color en los productos curados y ayudan a conservar su aroma durante el almacenamiento.

        .row.justify-content-center.mb-4
          .col-lg-8
            .bg-color-1(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg
                  .p-4
                    p.mb-4(data-aos="fade-up") #[strong Funciones principales:]

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Aceleran la conversión de metaglobina a mioglobina.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Estabilizan el color durante el curado.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Reducen la cantidad de nitritos residuales en el producto.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Activan el curado.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | Impiden la formación de nitrosaminas.

                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/8.png', alt='', data-aos="zoom-in") 

        .row.justify-content-center.mb-5
          .col-lg-10
            .tarjeta.bg-color-6.p-4
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='', data-aos="zoom-in" style="max-width: 90px").mb-4.mb-lg-0.mx-auto
                .col-lg
                  p.mb-0(data-aos="fade-up").text-white El uso permitido de estos compuestos es 50 g por cada 100 kg de masa cárnica.


        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Azúcar

        p(data-aos="fade-up").mb-4 El azúcar mejora el sabor y el aroma de los productos cárnicos, además de facilitar la penetración de la sal y los nitritos. También actúa como sustrato para los microorganismos responsables de la fermentación en productos cárnicos madurados. Los azúcares más utilizado.


        .row.justify-content-center.mb-5
          .col-lg-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1. 
              span Estructura molecular de la glucosa

            figure.mb-3
              img(src='@/assets/curso/tema1/f1.png', style="max-width: 200px" data-aos="zoom-in" alt="Estructura molecular de la glucosa, un monosacárido, representada en su forma cíclica con grupos hidroxilo  y un oxígeno en el anillo.").mx-auto

        .row.justify-content-center.mb-5
          .col-lg-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2. 
              span Estructura molecular de la sacarosa

            figure.mb-3
              img(src='@/assets/curso/tema1/f2.png', style="max-width: 200px" data-aos="zoom-in" alt="Estructura molecular de la sacarosa, un disacárido compuesto por una molécula de glucosa y una de fructosa unidas por un enlace glucosídico.").mx-auto
            p.mb-0(data-aos="fade-up").text-center La adición máxima recomendada es del 5 % del total de la formulación.


        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Extendedores

        p(data-aos="fade-up").mb-4 Los extendedores son sustancias utilizadas en la producción cárnica para mejorar la estabilidad y aumentar el rendimiento. Los tipos de extendedores son:


    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-5

        .carousel-bg
          .row.justify-content-around.align-items-center.my-5
            .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/10.png', style="max-width: 100%", alt='').mx-auto
            .col-lg-7
              SlyderF(columnas="col-lg-6")(data-aos="zoom-in-up")
                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema1/icon-1.png', style="max-width: 150px", alt='').mx-auto.mb-4
                  .bg-color-acento-contenido.d-inline-block.px-2.py-1.mb-3
                    h6.text-center.mb-0.text-color-black Leche en polvo
                  p.text-center.text-small.lh-sm Mejora la textura y el sabor.


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema1/icon-2.png', style="max-width: 150px", alt='').mx-auto.mb-4
                  .bg-color-acento-contenido.d-inline-block.px-2.py-1.mb-3
                    h6.text-center.mb-0.text-color-black Harina de cereales 
                  p.text-center.text-small.lh-sm Facilita la cocción y el porcionado. (Maíz, arroz, trigo, papa, yuca)

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema1/icon-1.png', style="max-width: 150px", alt='').mx-auto.mb-4
                  .bg-color-acento-contenido.d-inline-block.px-2.py-1.mb-3
                    h6.text-center.mb-0.text-color-black Proteína vegetal 
                  p.text-center.text-small.lh-sm Sustituye parcialmente las proteínas cárnicas. (Soya texturizada)


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema1/icon-2.png', style="max-width: 150px", alt='').mx-auto.mb-4
                  .bg-color-acento-contenido.d-inline-block.px-2.py-1.mb-3
                      h6.text-center.mb-0.text-color-black Proteínas de origen animal 
                  p.text-center.text-small.lh-sm Mejoran la retención de agua y la textura del producto. (Plasma sanguíneo, caseinato de sodio, clara de huevo)


        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Antioxidantes

        p(data-aos="fade-up").mb-0 Los antioxidantes previenen la oxidación de las grasas y la pérdida de color en los productos cárnicos. Los más utilizados en la industria son:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-4(data-aos="fade-up").h-100
          .bg-color-7.px-4.py-3
            h5.mb-0 BHA
          .px-4.py-3
            p.mb-0 (Butilhidroxianisol)
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-8(data-aos="fade-up").h-100
          .bg-color-7.px-4.py-3
            h5.mb-0 BHT
          .px-4.py-3
            p.mb-0 (Butilhidroxitolueno)

    .row.justify-content-center.mb-5
      .col-lg-6
        p(data-aos="fade-up").mb-4 El uso permitido es del #[strong 0,01 % respecto al peso del producto].

    .titulo-tres.mb-5(data-aos="flip-up")
      h4(data-aos="fade-up") Ácido – L - Glutámico de sodio

    .bg-full-width.bg-fondo-6
      .px-4.px-md-5.pb-5

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6
            .bg-color-9(data-aos="fade-up").p-4.h-100
              p.mb-0.mt-lg-4 El ácido glutámico es un aminoácido presente en tejidos animales y vegetales. Se emplea en la industria cárnica como #[strong potenciador de sabor].

          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/11.png', alt='', data-aos="zoom-in")


        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Gomas

        p(data-aos="fade-up").mb-4 Los carragenatos, extraídos de algas rojas, son utilizados en productos cárnicos como gelificantes y estabilizadores. Los tipos de carragenatos son:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-5(data-aos="fade-up").h-100
              .bg-color-7.px-4.py-3
                h5.mb-0 Kappa
              .px-4.py-3
                p.mb-0 Forma geles firmes.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-5(data-aos="fade-up").h-100
              .bg-color-7.px-4.py-3
                h5.mb-0 Lota
              .px-4.py-3
                p.mb-0 Generar geles elásticos y suaves
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-5(data-aos="fade-up").h-100
              .bg-color-7.px-4.py-3
                h5.mb-0 Lambda
              .px-4.py-3
                p.mb-0 Actúa como espesante


        .titulo-tres.mb-5(data-aos="flip-up")
          h4(data-aos="fade-up") Especias

        p(data-aos="fade-up").mb-4 Las especias se utilizan en la carne para mejorar su aroma y sabor. Algunas actúan como conservantes. La clasificación de especias:


        .row.justify-content-center.mb-3
          .col-lg-8
            .bg-color-1(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/12.png', alt='', data-aos="zoom-in")
                .col-lg
                  .p-4

                    ul.lista-ul--color
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Hojas:] laurel, mejorana, romero, tomillo.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Tallos:] apio, cilantro, perejil.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Corteza:] canela.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Frutas:] pimienta, nuez moscada.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Raíces:] rábano.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Bulbos:] cebolla, ajo.
                      li.mb-1
                        i.fa-regular.fa-circle-right
                        | #[strong Semillas:] comino, mostaza.
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
