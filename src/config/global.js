export default {
  global: {
    Name: 'Ingredientes y aditivos usados en el procesamiento de carnes',
    Description:
      'El componente formativo explica los ingredientes y aditivos usados en productos cárnicos, como sal, azúcar, fosfatos, antioxidantes y nitritos, detallando su función en conservación, sabor y textura. También aborda el ahumado, sus tipos (frío, caliente, artificial) y su impacto en color, aroma y conservación. Finalmente, presenta normativas y referencias sobre el procesamiento cárnico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ingredientes y aditivos no cárnicos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El ahumado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/93610222_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ingredientes y aditivos no cárnicos',
      referencia:
        'La ciencia en los alimentos. (20233). Cuel es la diferencia entre aditivo e ingrediente - INGREDIENTES – ADITIVOS. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=cqrcqLdXTCE&ab_channel=LacienciaenlosalimentosLacienciaenlosalimentos',
    },
    {
      tema: 'Ingredientes y aditivos no cárnicos',
      referencia:
        'Pacheco Pérez, W. A., Restrepo Molina, D. A., & Sepúlveda Valencia, J. U. (2011). Revisión: Uso de Ingredientes no Cárnicos como Reemplazantes de Grasa en Derivados Cárnicos. Revista Facultad Nacional de Agronomía - Medellín, 64(2), 6257-6264.',
      tipo: 'Documento',
      link: 'https://www.redalyc.org/articulo.oa?id=179922664023',
    },
    {
      tema: 'El ahumado',
      referencia: 'SMOKE KING. (S.F.). Guía de Ahumados.',
      tipo: 'Documento',
      link: 'https://ahumadoras.com/guia-de-ahumados.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aditivos alimentarios',
      significado:
        'sustancias añadidas a los productos cárnicos para mejorar su conservación, textura, sabor o apariencia.',
    },
    {
      termino: 'Ahumado',
      significado:
        'método de conservación que aporta aroma y color a los productos cárnicos mediante la exposición al humo.',
    },
    {
      termino: 'Antioxidantes',
      significado:
        'compuestos que evitan la oxidación de las grasas y prolongan la vida útil del producto.',
    },
    {
      termino: 'Carragenatos',
      significado:
        'polisacáridos extraídos de algas rojas usados para mejorar la textura y la retención de agua.',
    },
    {
      termino: 'Emulsionantes',
      significado:
        'sustancias que ayudan a estabilizar mezclas de agua y grasa en productos cárnicos procesados.',
    },
    {
      termino: 'Fosfatos',
      significado:
        'compuestos que mejoran la solubilización de proteínas y aumentan la capacidad de retención de agua.',
    },
    {
      termino: 'Glutamato de sodio',
      significado:
        'aminoácido que actúa como potenciador del sabor en productos cárnicos.',
    },
    {
      termino: 'Nitratos y nitritos',
      significado:
        'sales utilizadas en el curado de carnes para fijar el color y prevenir el crecimiento bacteriano.',
    },
    {
      termino: 'Salmuera',
      significado:
        'mezcla de agua y sal utilizada en la conservación y curado de productos cárnicos.',
    },
    {
      termino: 'Texturizantes',
      significado:
        'ingredientes que modifican la textura de los productos cárnicos, mejorando su consistencia y apariencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amézquita, A., Arango, C., Restrepo, D. y Restrepo, R. (2001). Industria de carnes. Medellín, Colombia: Universidad Nacional.',
      link: '',
    },
    {
      referencia:
        'Girad, J. (1991). Tecnología de la carne y de los productos cárnicos. Madrid, España: Acribia.',
      link: '',
    },
    {
      referencia:
        'Guerrero, I., Hui, Y. y Rosmini, M. (2012). Ciencia y tecnología de la carne. México: Limusa.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2008, 20 de agosto). Industrias Alimentarias. Productos cárnicos procesados no enlatados (NTC 1325).',
      link: '',
    },
    {
      referencia: 'Klement, M. (1984). El ahumado. Zaragoza, España: Acribia.',
      link: '',
    },
    {
      referencia:
        'Maya, J. (2010). Manejo y procesamiento de carnes. Pasto, Colombia: Universidad Nacional Abierta y a Distancia.',
      link: '',
    },
    {
      referencia:
        'Ramírez, R. (2006). Tecnología de cárnicos. Bogotá, Colombia: Universidad Nacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla ',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
