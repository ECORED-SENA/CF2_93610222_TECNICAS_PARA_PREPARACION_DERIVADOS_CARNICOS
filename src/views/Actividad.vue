<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ingredientes y aditivos en productos cárnicos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los ingredientes y aditivos no cárnicos utilizados en la industria cárnica, sus funciones, clasificación y su impacto en la conservación, sabor, textura y estabilidad de los productos procesados.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de los nitratos y nitritos en los productos cárnicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fijar el color y prevenir el crecimiento bacteriano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar la textura y solubilización de proteínas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportar dulzura y favorecer la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la retención de agua y la jugosidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál de los siguientes ingredientes no es un antioxidante?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'BHA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fosfatos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'BHT.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TBHQ.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre la sal es correcta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No influye en la retención de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es utilizada únicamente para potenciar el sabor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ayuda a conservar los productos embutidos y realza el sabor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se usa en embutidos en una proporción del 10 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito de los fosfatos en los productos cárnicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la acidez y mejorar la coloración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solubilizar proteínas y mejorar la retención de agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aportar aroma y potenciar el sabor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actuar como conservante natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una función clave de los ascorbatos y eritorbatos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la textura del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aportar dulzura y mejorar la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acelerar la formación del color en carnes curadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la capacidad de retención de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál de los siguientes no es un tipo de ahumado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ahumado en frío.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ahumado caliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ahumado a presión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ahumado artificial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la principal función del azúcar en la elaboración de productos cárnicos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el color del producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actuar como fuente de energía para la fermentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir la retención de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fijar el color en la carne curada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué efecto tienen las gomas como los carragenatos en los productos cárnicos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejoran la textura y la retención de agua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuyen la actividad de los microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportan dulzura y sabor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actúan como colorantes naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El agua en los productos cárnicos mejora la jugosidad y estabiliza las emulsiones.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los nitritos pueden ser usados en cualquier cantidad sin restricciones, ya que no afectan la salud.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El ahumado se emplea solo para mejorar el sabor, sin influir en la conservación de la carne.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los antioxidantes evitan la oxidación de las grasas, prolongando la vida útil del producto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El glutamato de sodio es un aminoácido que actúa como potenciador del sabor.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La sal se usa únicamente para mejorar la apariencia de los productos cárnicos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los fosfatos en la industria cárnica ayudan a mejorar la solubilización de proteínas y la retención de agua',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
