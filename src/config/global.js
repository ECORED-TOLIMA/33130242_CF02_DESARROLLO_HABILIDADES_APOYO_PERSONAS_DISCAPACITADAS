export default {
  global: {
    componenteFormativo: 'Alcance y procedimiento de la valoración de apoyos',
    descripcionCurso:
      'En este componente formativo se profundiza en el concepto de valoración de apoyos y se brinda orientación a la persona facilitadora sobre el procedimiento, abarcando tanto la fase de preparación de la entrevista como su desarrollo. Además, se detallan las preguntas clave y los aspectos que deben considerarse conforme a los lineamientos normativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Antecedentes de la valoración de apoyos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de la valoración de apoyo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Habilidades de la persona facilitadora',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '¿Qué no es una valoración de apoyos?',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Descripción del proceso técnico de la valoración de apoyos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Contenido de la solicitud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Preparación o aprestamiento para la valoración de apoyos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Entrevista previa: consideraciones y recomendaciones para tener en cuenta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '3.	Descripción del proceso técnico de la valoración de apoyos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Contenido de la solicitud',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Preparación o aprestamiento para la valoración de apoyos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Entrevista previa: consideraciones y recomendaciones para tener en cuenta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Aspectos adicionales para tener en cuenta en la valoración de apoyos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Asistencias personales y apoyos humanos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ayudas vivas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Apoyos tecnológicos y técnicos',
            hash: 't_4_3',
          },
        ],
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: 'Valoración de apoyos',
      referencia:
        'Correa Montoya, L. (2017). <em>Adjudicar desde el lente de la Convención sobre los derechos de las personas con discapacidad: Algunos retos de la jurisprudencia constitucional colombiana</em>. DescLAB.',
      tipo: 'Libro en línea',
      link:
        'https://www.desclab.com/_files/ugd/e0e620_b2bf79eec03c4f3086b42029eb7b8885.pdf',
    },
    {
      tema: 'Ajustes razonables',
      referencia:
        'Fondo de Población de las Naciones Unidas (UNFPA). (s.f.). <em>Sistemas de apoyos, ajustes razonables y ajustes de procedimiento: Definiciones y recomendaciones para su implementación en la Argentina.</em> ',
      tipo: 'Libro en línea',
      link:
        'https://argentina.unfpa.org/sites/default/files/pub-pdf/sistemas-de-apoyo-ajustes-razonables.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajustes razonables',
      significado:
        'se entenderán las modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los derechos humanos y libertades fundamentales. (Convención sobre los derechos de las personas con discapacidad, 2006, art. 2)',
    },
    {
      termino: 'Apoyos',
      significado:
        'los apoyos de los que trata la presente ley son tipos de asistencia que se prestan a la persona con discapacidad para facilitar el ejercicio de su capacidad legal. Esto puede incluir la asistencia en la comunicación, la asistencia para la comprensión de actos jurídicos y sus consecuencias, y la asistencia en la manifestación de la voluntad y preferencias personales. (Ley 1996, 2019, Colombia, art. 3)',
    },
    {
      termino: 'Autonomía',
      significado:
        'en todas las actuaciones se respetará el derecho de las personas a autodeterminarse, a tomar sus propias decisiones, a equivocarse, a su independencia y al libre desarrollo de la personalidad conforme a la voluntad, deseos y preferencias propias, siempre y cuando estos no sean contrarios a la Constitución, a la ley y a los reglamentos internos que rigen las entidades públicas y privadas. (Ley 1996, 2019, Colombia, art. 4)',
    },
    {
      termino: 'Barreras',
      significado:
        'cualquier tipo de obstáculo que impida el ejercicio efectivo de los derechos de las personas con algún tipo de discapacidad. Estas pueden ser actitudinales, cuando conductas, palabras, frases, sentimientos, preconcepciones o estigmas impiden u obstaculizan el acceso en condiciones de igualdad; comunicativas, cuando se presentan obstáculos que impiden o dificultan el acceso a la información, a la consulta, al conocimiento y, en general, el desarrollo en condiciones de igualdad del proceso comunicativo de las personas con discapacidad a través de cualquier medio o modo de comunicación, incluidas las dificultades en la interacción comunicativa; y físicas, cuando existen obstáculos materiales, tangibles o construidos que impiden o dificultan el acceso y el uso de espacios, objetos y servicios de carácter público y privado, en condiciones de igualdad por parte de las personas con discapacidad. (Ley 1618, 2013, Colombia, art. 2)',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'según la Corte Constitucional colombiana, es la capacidad de goce y capacidad de ejercicio. La capacidad de goce es la aptitud general que tiene toda persona natural o jurídica para ser sujeto de derechos y obligaciones, y es, sin duda alguna, el atributo esencial de la personalidad jurídica. La capacidad de ejercicio consiste en la habilidad que la ley le reconoce a una persona para poderse obligar por sí misma, sin la intervención o autorización de otra. Implica, entonces, el poder realizar negocios jurídicos e intervenir en el comercio jurídico, sin que para ello requiera acudir a otro. (Corte Constitucional, Sentencia C-983 de 2002, M. P. Dr. Jaime Córdoba Triviño)',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'los derechos humanos son derechos inherentes a todos los seres humanos, sin distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o cualquier otra condición. Entre los derechos humanos se incluyen el derecho a la vida y a la libertad, a no estar sometido ni a esclavitud ni a torturas, a la libertad de opinión y de expresión, a la educación y al trabajo, entre otros muchos. Estos derechos corresponden a todas las personas, sin discriminación alguna. (ONU, https://www.un.org/es/global-issues/human-rights)',
    },
    {
      termino: 'Discapacidad',
      significado:
        'es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás. (Convención sobre los derechos de las personas con discapacidad, 2006, preámbulo)',
    },
    {
      termino: 'Persona facilitadora de la valoración de apoyos',
      significado:
        'es la persona natural designada por la entidad pública o privada para coordinar y llevar a cabo el proceso de valoración de apoyos de acuerdo con los lineamientos y el protocolo nacional para la realización de la valoración de apoyos expedidos por el ente rector del Sistema Nacional de Discapacidad. (Decreto 487, 2022, Colombia, art. 2.8.2.5.1)',
    },
    {
      termino: 'Valoración de apoyos',
      significado:
        'es el proceso que se realiza con base en estándares técnicos, que tiene como finalidad determinar cuáles son los apoyos formales que requiere una persona para tomar decisiones relacionadas con el ejercicio de su capacidad legal. (Ley 1996, 2019, Colombia, art. 3)',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea General de las Naciones Unidas. (2006). <em>Convención sobre los Derechos de las Personas con Discapacidad.</em>',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1346 de 2009: <em>Por medio de la cual se aprueba la “Convención sobre los Derechos de las Personas con Discapacidad”</em>. Diario Oficial No. 47.427.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1448 de 2011: <em>Por la cual se dictan medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado interno.</em>',
      link:
        'https://www.unidadvictimas.gov.co/documentos_bibliotec/ley-1448-de-2011-2/',
    },
    {
      referencia:
        'Congreso de Colombia. (2019). Ley 1996 de 2019: <em>Por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad.</em> Diario Oficial No. 51.057.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_1996_2019.html',
    },
    {
      referencia:
        'Congreso de Colombia. (2023). Ley 2297 de 2023: <em>Por medio de la cual se establecen medidas en beneficio de la autonomía de las personas con discapacidad y sus cuidadores</em>. Diario Oficial No. 52.440.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=143777',
    },
    {
      referencia:
        'Consejería Presidencial para la Participación de las Personas con Discapacidad. (2020). <em>Valorar apoyos para tomar decisiones: Lineamientos y protocolo nacional para la valoración de apoyos en el marco de la Ley 1996 de 2019.</em>',
      link:
        'https://dapre.presidencia.gov.co/AtencionCiudadana/Documents/Lineamientos-Valoraciones-apoyo.pdf',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2004). <em>Sentencia T-025 de 2004.</em>',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2009). <em>Auto 006 de 2009.</em> M. P. Manuel José Cepeda Espinosa.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/autos/2009/a006-09.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2010). <em>Sentencia C-293 de 2010. M. P</em>. Nilson Pinilla Pinilla.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2010/c-293-10.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2014). <em>Auto 173 de 2014. M. P</em>. Luis Ernesto Vargas Silva.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/autos/2014/a173-14.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2016). <em>Sentencia C-182 de 2016. M. P.</em> Gloria Stella Ortiz Delgado.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2016/c-182-16.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2020). <em>Decreto 1429 de 2020: Por el cual se reglamentan artículos de la Ley 1996 de 2019.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=144938',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2022). <em>Decreto 487 de 2022: Reglamenta la prestación del servicio de valoración de apoyos.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=185226',
    },
    {
      referencia:
        'Unidad para las Víctimas. (2017). <em>Resolución 589 de 2017.</em>',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30042395',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Castillo Pérez',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Johan Andrey Rodríguez Rodríguez ',
          cargo: 'Experto temático',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Mary Blanca Ángel Franco ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Martha Cecilia Builes Alzate ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'María Patricia Sarmiento ',
          cargo: 'Directora',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Jenny Elizabeth Tibocha Julio',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Angie Vanessa Soto Arango ',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica ',
          centro:
            'Centro de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
