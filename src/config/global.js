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
        download: 'downloads/dist.pdf',
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
      tema: '¿Qué son productos cárnicos?',
      referencia:
        'El Mundo del Campo - alfonso Uribe. (2019).Productos cárnicos chorizos caqueta, chicharrón KAPEL.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=6Nvp6M3DtxQ&ab_channel=ElMundodelCampo-alfonsouribet',
    },
    {
      tema: 'Clasificación de los productos cárnicos procesados',
      referencia:
        'Jahira Casilla. (2021). Clasificación de productos cárnicos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=9RKsBh3bFz0&ab_channel=JahiraCasilla',
    },
    {
      tema: 'Tripa o funda utilizada para embutidos',
      referencia:
        'TARAJAI. (2021). Diferentes tripas para embutidos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nU98UwnzV28&ab_channel=TARAJAI',
    },
    {
      tema: 'Proceso de elaboración de productos cárnicos',
      referencia: 'FAO. (s.f.). Procesados de carnes',
      tipo: 'Documento',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/389de810-1911-4f0e-965f-d9fe0b8aa52e/content',
    },
  ],
  glosario: [
    {
      termino: 'Ahumado',
      significado:
        'técnica de conservación que otorga sabor y color mediante la exposición al humo.',
    },
    {
      termino: 'Embutido',
      significado:
        'producto cárnico moldeado dentro de una tripa natural o artificial.',
    },
    {
      termino: 'Esterilización',
      significado:
        'eliminación de microorganismos mediante altas temperaturas en productos enlatados.',
    },
    {
      termino: 'Maduración',
      significado:
        'proceso bioquímico que mejora el sabor y textura de productos cárnicos crudos.',
    },
    {
      termino: 'Morcilla',
      significado:
        'producto elaborado con sangre de cerdo, arroz y condimentos.',
    },
    {
      termino: 'Productos cárnicos',
      significado:
        'alimentos elaborados con carne, grasa y aditivos autorizados.',
    },
    {
      termino: 'Salchichón',
      significado:
        'embutido cocido a base de carne de res o cerdo con especias.',
    },
    {
      termino: 'Tratamiento térmico',
      significado:
        'proceso de cocción utilizado para garantizar la seguridad y conservación del producto.',
    },
    {
      termino: 'Tripa artificial',
      significado:
        'recubrimiento sintético de celulosa, plástico o colágeno para embutidos.',
    },
    {
      termino: 'Tripa natural',
      significado:
        'funda de origen animal utilizada en la elaboración de embutidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amézquita, A., Arango, C., Restrepo, D. y Restrepo, R. (2001). Industria de carnes. Medellín, Colombia: Universidad Nacional.',
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
          nombre: 'Edgar Mauricio Cortes Garcia',
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
