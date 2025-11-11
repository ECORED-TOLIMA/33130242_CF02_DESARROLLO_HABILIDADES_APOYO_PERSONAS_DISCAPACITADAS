<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Descripción del proceso técnico de la valoración de apoyos
    
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 3.
      i Descripción del proceso técnico de la valoración de apoyos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img1.svg', alt='Descripción: Pendiente por la entregar')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img1.svg', alt='Descripción: Pendiente por la entregar')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="zoom-in")
        p A continuación, se presenta una descripción del proceso técnico de la valoración de apoyos, que inicialmente le permitirá a la persona facilitadora de esta valoración tener un esquema general del proceso y que posteriormente pueda profundizar un poco más en cada una de sus etapas.
        .bloque-texto-c.color-primario.tarjeta.p-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.d-none.d-lg-block.mb-4(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema3/img3.svg" alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 La Convención sobre los Derechos de las Personas con Discapacidad de Naciones Unidas (2006), adoptada por Colombia mediante la Ley 1346 de 2009 y revisada por la Corte Constitucional en la Sentencia C-293 de 2010, en su articulado establece un cambio de paradigma, donde se propone pasar de las medidas sustitutivas a un enfoque de derechos humanos que privilegia y garantiza la voluntad, capacidad y autonomía de las personas con discapacidad, y se invita a los Estados firmantes de la Convención a modificar, transformar y ajustar sus normatividades internas, alineándose con los derechos desarrollados en la Convención.
      .col-lg-3.col-10.d-lg-block.d-none.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img2.png" alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img4.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="zoom-in")
        p De acuerdo con lo anterior, en Colombia con la Ley 1996 de 2019 se da un marco normativo para que las personas con discapacidad puedan disfrutar plenamente de su capacidad, pudiendo elegir y tomar decisiones para todas y cada una de las actividades de la vida, entendiendo que el cambio de paradigma implica pasar de medidas sustitutivas —donde una tercera persona tomaba las decisiones de las personas con discapacidad (en mayor medida las personas con discapacidad intelectual se veían afectadas por este modelo de sustitución)— a un modelo donde se les guía y se les brindan los apoyos para que puedan tomar sus propias decisiones.
        p.mb-0 Para ello, se toma como referencia la concepción establecida en la Convención sobre los Derechos de las Personas con Discapacidad, que reconoce los siguientes aspectos:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Reconocimiento como sujetos plenos de derechos")
            p.mb-0 Las decisiones de las personas con discapacidad deben ser respetadas, aceptadas y acatadas por todas las demás personas.
          div(titulo="Accesibilidad")
            p.mb-0 Derecho a ajustes razonables para comprender, informarse y comunicar sus decisiones.
            p.mb-0 Esto puede incluir acompañamiento de otras personas o uso de tecnologías para garantizar que las personas con discapacidad estén informadas y tengan pleno conocimiento de lo que ocurre durante el proceso de valoración.
          div(titulo="Elección libre de apoyos (red de apoyos)")
            p.mb-0 Permite identificar a las personas más cercanas —ya sea por vínculos de parentesco definidos por la ley, por lazos de amistad o por relaciones de confianza— que puedan brindar acompañamiento. En todo caso, será la persona con discapacidad quien elija libremente a quien le apoye en la toma de decisiones.

    p.mb-4 En lo referente al procedimiento establecido en el Capítulo 6 del Decreto 487 de 2022, artículos 2.8.2.6.1 al 2.8.2.6.11, los pasos que deben cumplirse para el trámite de la valoración de apoyos, tanto en entidades públicas como privadas, son los siguientes:
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La valoración de apoyos debe iniciar con una entrevista semiestructurada. Esto se debe a que la persona facilitadora del proceso realiza una etapa previa de preparación y aprestamiento, guiándose por el marco normativo y los lineamientos establecidos. En este sentido, las preguntas y el desarrollo de la entrevista no son improvisados, sino que responden a una planificación previa. No obstante, es fundamental que este espacio se configure como un escenario de conversación y diálogo, donde se garantice un ambiente seguro y de confianza que promueva la autonomía de la persona con discapacidad y contribuya a la eliminación de barreras actitudinales, físicas y comunicativas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0  Por lo tanto, la entrevista no debe ser rígida ni limitarse a una lista de verificación. En cambio, se debe procurar un análisis integral del entorno familiar, de las condiciones físicas, sensoriales y psicoemocionales de la persona con discapacidad, así como de su interacción con el entorno cercano y con otras actividades de la vida cotidiana, como la escuela o el trabajo. Esta entrevista permite identificar elementos clave para el análisis de la autonomía, las barreras, las dificultades y las limitaciones que puedan existir en el entorno, según el nivel de funcionamiento de cada persona. Esto resulta esencial para determinar los ajustes razonables que deben implementarse, con el fin de que la persona con discapacidad pueda tomar decisiones y expresarlas libremente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-10.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')
            .col-lg-9
              p.mb-0 Dado lo anterior, no existe un tiempo máximo establecido para la realización de la entrevista, ya que su duración dependerá de las circunstancias particulares de cada caso y de las herramientas de accesibilidad comunicativas que se requieran. La entrevista se lleva a cabo directamente con la persona con discapacidad y, si esta lo solicita y consiente, también puede incluir a su red de apoyo. Esta red suele coincidir con el núcleo familiar, y, en la medida de lo posible, se recomienda —previa coordinación con la familia y la Personería Municipal— realizar una visita domiciliaria. Esta visita permite conocer de manera más cercana las condiciones reales en las que vive la persona con discapacidad y facilita una comprensión más profunda de su entorno y de sus actividades cotidianas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="zoom-in")
        p Posteriormente, debe elaborarse un informe que recoja toda la información obtenida durante la entrevista. En dicho informe debe quedar claramente determinada la necesidad de apoyos que requiere la persona con discapacidad para el ejercicio pleno de su capacidad jurídica. A partir de este informe pueden derivarse dos posibles escenarios: por un lado, la no formalización de apoyos, dado que existen apoyos que no requieren ser formalizados —como aquellos que surgen de manera natural en el entorno familiar o comunitario—; por otro lado, se puede optar por la formalización de los apoyos, a través de mecanismos como el acuerdo de apoyo o la adjudicación judicial de apoyos.
      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img8.png" alt="Imagen decorativa")
    
    p.mb-4 A continuación, se presenta un esquema del proceso, seguido de su respectiva descripción.

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Pasos para el proceso técnico de la valoración de apoyos 

    .tarjeta--BG06.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG06.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Solicitud
              p.mb-0 Hay dos opciones:  la realiza la persona con discapacidad o un tercero, esta solicitud va acompañada de unos documentos y un expediente que pueden contener la historia clínica y otros informes de valoraciones previas, que sirven para preparar y realizar el aprestamiento de la entrevista.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Concertación
              p.mb-0 Concertación de la realización de la entrevista con la persona con discapacidad y su red de apoyo.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img9.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Entrevista
              p.mb-0 Realización de la entrevista, la cual es semiestructurada, accesible y en ese sentido, se deben implementar las estrategias necesarias según el caso concreto para una comunicación accesibles donde se garantiza siempre la autonomía de la persona con discapacidad y la eliminación de barreras actitudinales, físicas y comunicativas.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Informe de valoración de apoyos
              p.mb-0 Acá puede haber dos opciones: 
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 La no formalización de apoyos, existen apoyos que no es obligatorio formalizarlos como por ejemplo los que se presentan de manera natural en la familia y la comunidad
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 La formalización de apoyos por medio de un acuerdo de apoyos o una adjudicación judicial de apoyos.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
    p A continuación, se desarrollarán los aspectos a tener en cuenta en cada uno de estos pasos, partiendo de lo expuesto en el Decreto 487 de 2022, los lineamientos y el Protocolo Nacional para la Valoración de apoyos en el marco de la Ley 1996 (2020), así como la experiencia del Programa de Atención a Personas con Discapacidad (PAPD) de la Universidad de Antioquia y del Ministerio de la Igualdad.
    p El diagnóstico participativo en salud ambiental es un proceso metodológico que busca identificar y comprender 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Contenido de la solicitud

    .bloque-texto-c.color-secundario.tarjeta.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-10.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
        .col-lg-8
          .px-4
            p.mb-0 La solicitud constituye el momento previo e inicial en el que una persona con discapacidad, o alguien perteneciente a su red de apoyo familiar o social, se acerca a entidades públicas o privadas que, de acuerdo con el artículo 11 de la Ley 1996 de 2019, están habilitadas para realizar la valoración de apoyos. Esto, siempre y cuando dichas entidades sigan los lineamientos y protocolos establecidos por el ente rector de la política pública de discapacidad —actualmente el Ministerio de Igualdad y Equidad—. Cabe aclarar que, como mínimo, las valoraciones de apoyo deben ser ofrecidas por la Defensoría del Pueblo, las Personerías y los entes territoriales a través de las gobernaciones y alcaldías.
    p.mb-4 En el contenido de la solicitud es fundamental tener en cuenta los siguientes aspectos:
    .tarjeta--BG01.p-4
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          LineaTiempoD.color-acento-botones
            .row.justify-content-center(numero="1" titulo="Datos personales")
              .col-lg-12.order-lg-2.order-3
                p Se deben registrar los datos de la persona con discapacidad. Si la solicitud es presentada por una tercera persona, también deben incluirse los datos de quien realiza la solicitud. Esto incluye: nombres y apellidos, número de identificación, dirección, teléfono fijo o celular, correo electrónico, nivel educativo, estado civil y las personas con quienes reside.
                
            .row.justify-content-center(numero="2" titulo="Motivación de la solicitud")
              .col-lg-12.order-lg-2.order-3
                p Es importante indagar, de manera general, por qué se considera que la persona con discapacidad requiere una valoración de apoyos. ¿Cuáles son las razones o motivaciones que sustentan esta necesidad?
                
            .row.justify-content-center(numero="3" titulo="Actuaciones y actos jurídicos")
              .col-lg-12.order-lg-2.order-3
                p Se debe especificar con claridad para qué actuaciones o actos jurídicos se solicita la valoración de apoyos. Es necesario describir cada uno de ellos de forma detallada. Por ejemplo: participación en procesos judiciales, reclamación de subsidios o pensiones, trámites administrativos ante entidades públicas (como solicitudes de indemnización por vía administrativa ante la Unidad para las Víctimas), trámites ante entidades privadas, gestiones bancarias, compraventa de bienes, o cualquier otro acto o negocio jurídico.
                P Asimismo, es necesario identificar en qué ámbitos se requiere la valoración de apoyos, tales como:
                ul.lista-ul
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Familia, cuidado personal y vivienda.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Salud (general, mental, sexual y reproductiva).
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Patrimonio y manejo del dinero.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Trabajo y generación de ingresos.
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Acceso a la justicia, participación ciudadana y ejercicio del derecho al voto.

            .row.justify-content-center(numero="4" titulo="Acciones jurídicas previas")
              .col-lg-12.order-lg-2.order-3
                p Verificar si las personas identificadas como posibles apoyos han iniciado alguna acción jurídica ante una entidad competente.
                
            .row.justify-content-center(numero="5" titulo="Datos de las personas que podrían brindar apoyo")
              .col-lg-12.order-lg-2.order-3
                p Registrar los datos de quienes se reconocen como posibles apoyos humanos: nombres y apellidos, tipo de vínculo o relación (parentesco, amistad, confianza), número de identificación, estado civil, dirección, teléfono fijo o celular y correo electrónico.
                
            .row.justify-content-center(numero="6" titulo="Forma de comunicación cotidiana")
              .col-lg-12.order-lg-2.order-3
                p Describir de manera clara y precisa cómo se comunica la persona con discapacidad en su vida diaria.
                
            .row.justify-content-center(numero="7" titulo="Capacidad de toma de decisiones")
              .col-lg-12.order-lg-2.order-3
                p Indicar si la persona con discapacidad puede tomar decisiones por sí misma. Para ello, es fundamental dialogar con la persona y con su entorno familiar sobre qué se entiende por toma de decisiones autónoma, asegurando que se trata de un concepto basado en libertad, autonomía, independencia y autodeterminación.
        .col-lg-3.col-10.mb-4.mb-lg-0.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-10.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="8" titulo="Comunicación de decisiones")
            .col-lg-12.order-lg-2.order-3
              p Si la respuesta anterior es afirmativa, describir cómo la persona con discapacidad comunica sus decisiones.
              
          .row.justify-content-center(numero="9" titulo="Ajustes razonables requeridos")
            .col-lg-12.order-lg-2.order-3
              p Identificar cuáles son los ajustes razonables necesarios para garantizar una toma de decisiones autónoma.
              
          .row.justify-content-center(numero="10" titulo="Uso de herramientas tecnológicas")
            .col-lg-12.order-lg-2.order-3
              p Indicar si la persona con discapacidad requiere que la valoración de apoyos se realice mediante herramientas o medios tecnológicos.
              
          .row.justify-content-center(numero="11" titulo="Valoraciones previas")
            .col-lg-12.order-lg-2.order-3
              p Verificar si la persona cuenta con una valoración de apoyos previa.
              
          .row.justify-content-center(numero="12" titulo="Valoraciones incompletas")
            .col-lg-12.order-lg-2.order-3
              p Indicar si dicha valoración fue incompleta y, en caso afirmativo, explicar las razones por las cuales se solicita una nueva valoración.
              
          .row.justify-content-center(numero="13" titulo="Formalización de acuerdos de apoyo")
            .col-lg-12.order-lg-2.order-3
              p Señalar si la persona con discapacidad cuenta con un acuerdo de apoyo formalizado ante notaría o centro de conciliación.
              
          .row.justify-content-center(numero="14" titulo="Documentación requerida")
            .col-lg-12.order-lg-2.order-3
              p Es importante que la persona con discapacidad o quien realiza la solicitud adjunte los siguientes documentos:
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Documento de identificación de la persona con discapacidad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Documento de identificación de las personas que serán los posibles apoyos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Registro civil de nacimiento de la persona con discapacidad.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Historia clínica actualizada que identifique claramente la discapacidad y el sistema de apoyos requeridos.

    P Finalmente, es fundamental verificar que la solicitud esté debidamente diligenciada, ya que esto permite realizar un adecuado proceso de aprestamiento por parte de la persona facilitadora de la valoración de apoyos.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Preparación o aprestamiento para la valoración de apoyos
    figure.mb-4
      img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen decorativa')

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0  Preparación previa al encuentro
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="zoom-in")
        p Antes del encuentro con la persona con discapacidad, la persona facilitadora debe leer cuidadosamente la solicitud y revisar los documentos anexos. Esto le permitirá comprender el contexto de la situación, evitar repetir información durante la entrevista y garantizar que el espacio y la comunicación cuenten con los ajustes razonables y condiciones de accesibilidad necesarias.
        .bloque-texto-c.color-secundario.p-3
          p.mb-0 Asimismo, es recomendable preparar la estructura del documento que se utilizará como informe de la valoración de apoyos. Esto facilitará la organización de la información durante la conversación con la persona con discapacidad y con quienes participen en el proceso. Si la persona facilitadora considera pertinente realizar una grabación de audio, debe contar con el consentimiento previo, libre e informado de la persona con discapacidad y de todas las personas presentes. Esta autorización debe formalizarse por escrito mediante un formato de consentimiento informado y firmado por quienes participan en la valoración.
      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img17.png" alt="Imagen decorativa")

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0  Comunicación directa y accesible
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img.img-fluid(src="@/assets/curso/temas/intro/img5.svg" alt="Imagen decorativa")
          .col-lg-11
            p Es fundamental que la persona facilitadora se prepare para interactuar directamente con la persona con discapacidad. En caso de prever dificultades en la comunicación, se deben considerar los ajustes razonables y las herramientas de accesibilidad que puedan facilitar el diálogo. Las preguntas deben dirigirse directamente a la persona con discapacidad, manteniendo contacto visual y verbal con ella, y no con sus cuidadoras, cuidadores o integrantes de la red de apoyo, incluso si estas personas median en la comunicación.
        .bloque-texto-c.color-primario.p-4
          p Durante el encuentro, se pueden plantear preguntas como:
          ul.lista-ul
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b ¿Qué apoyos necesita para comunicarse mejor?]
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 #[b ¿Cree que hay otras personas que podrían ayudar a mejorar la comunicación en este espacio?]
          p También se pueden formular preguntas a la red de apoyo, por ejemplo:
          .row
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta.tarjeta-boton.color-primario.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img25.svg', alt='Texto que describa la imagen')
                p.text-center.text-bold ¿Existe algún tipo de apoyo para facilitar la comunicación?

            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta.tarjeta-boton.color-primario.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img26.svg', alt='Texto que describa la imagen')
                p.text-center.text-bold ¿Cuál es ese tipo de apoyo?

            .col-sm-6.col-lg-4.mb-4.mb-sm-0
              .tarjeta.tarjeta-boton.color-primario.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img27.svg', alt='Texto que describa la imagen')
                p.text-center.text-bold ¿Quiénes podrían brindarlo?
      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img18.png" alt="Imagen decorativa")

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Identificación de barreras
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img19.png" alt="Imagen decorativa")
      .col-lg-9(data-aos="zoom-in")
        p La persona facilitadora debe tratar de identificar posibles barreras que puedan dificultar el desarrollo de la valoración. Algunas de estas pueden no ser evidentes al inicio y surgir durante el proceso. A modo de ejemplo, se pueden presentar:
        .bloque-texto-c.color-primario.p-3
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Espacios físicos que no garanticen privacidad ni comodidad para la persona con discapacidad ni para quienes participan en la valoración.
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Conflictos entre la persona con discapacidad y miembros de su red de apoyo.
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Actitudes negativas por parte de la familia que limiten el ejercicio de la autonomía en la toma de decisiones.
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Falta de disposición o colaboración por parte de la persona con discapacidad.
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Dificultades de comprensión por parte de la familia o red de apoyo sobre el proceso de valoración y la información requerida.
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 Ausencia de comunicación verbal por parte de la persona con discapacidad y falta de ajustes razonables como intérprete de Lengua de Señas Colombiana, pictogramas, guías intérpretes para personas con sordoceguera, entre otros.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="zoom-in")
        p Ante estas situaciones, es importante que la persona facilitadora esté atenta y preparada para implementar ajustes razonables, como:
        .bloque-texto-c.color-primario-beige.p-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-1.col-6.mb-lg-0.d-none.d-lg-block.mb-4(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema3/img20.svg" alt="Imagen decorativa")
            .col-lg-11
              ul.lista-ul.mb-0
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Uso de lenguaje sencillo y cotidiano.
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Indagación previa con la red de apoyo sobre cómo se comunica la persona con discapacidad y quiénes la comprenden mejor, para evaluar la necesidad de mediación comunicativa.

        p.mb-0 Estas medidas deben adaptarse al tipo de discapacidad y al contexto específico, siempre respetando la voluntad, autonomía e independencia de la persona con discapacidad.
      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img21.png" alt="Imagen decorativa")

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Explicación de conceptos clave
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img21_1.svg" alt="Imagen decorativa")
      .col-lg-9(data-aos="zoom-in")
        p Se recomienda que la persona facilitadora prepare un documento explicativo con lenguaje claro y accesible sobre los conceptos que se abordarán durante la valoración, tales como:
        .bloque-texto-c.color-primario.p-3.mb-3
          ul.lista-ul.mb-0
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Discapacidad (desde el Modelo Social).
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Tipos de discapacidad.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Capacidad jurídica.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Apoyos para el ejercicio de la capacidad jurídica.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Ajustes razonables.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Tipos de apoyos (humanos, técnicos, tecnológicos o ayudas vivas. Estos aspectos se plantearán en el apartado 4).
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Valoración de apoyos.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Formalización de apoyos.
            li.mb--6
              i.lista-ul__vineta
              p.text-bold.mb-0 Toma de decisiones autónoma.
        P.mb-0 Este documento debe ser leído en voz alta, explicado de forma pausada y acompañado de preguntas que permitan verificar la comprensión. Una estrategia útil consiste en pedir a la persona con discapacidad y a las demás personas participantes que expliquen con sus propias palabras cómo entendieron los conceptos.
    
    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Explicación del proceso
    
    .row.justify-content-center.align-items-center
      .col-lg-9.order-lg-1.order-2(data-aos="zoom-in")
        p También deben explicarse de manera clara y pausada los distintos momentos y pasos del proceso de valoración de apoyos. En caso de que se requieran varios encuentros, es importante informar sobre ello, para garantizar que se aborden todos los ámbitos de decisión y necesidades de la persona con discapacidad.
        p.mb-0 Finalmente, se debe explicar que el proceso culmina con la elaboración de un informe, el cual será entregado y retroalimentado con todas las personas que participaron en la valoración.
      .col-lg-3.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img23.png" alt="Imagen decorativa")
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Entrevista previa: consideraciones y recomendaciones para tener en cuenta
    p.mb-4 Al inicio de la entrevista, es fundamental explicar a la persona con discapacidad y a su red de apoyo el contenido del consentimiento informado, así como los distintos momentos y pasos que conforman el proceso de valoración de apoyos. A partir de allí, se analizan los siguientes aspectos directamente con la persona con discapacidad.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Motivaciones y proyecto de vida

    p.mb-4 La valoración de apoyos debe centrarse en la persona con discapacidad como protagonista, reconociendo sus necesidades, metas, deseos y decisiones. Es ella quien debe aportar la mayor cantidad de información sobre su proyecto de vida y los apoyos que requiere o con los que ya cuenta. Algunas preguntas orientadoras que puede formular la persona facilitadora son:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario-medio.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2
              ul.lista-ul.mb-0
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 ¿Cuáles son las actividades que realiza cotidianamente?
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 ¿Qué decisiones toma en un día común y corriente?
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 ¿Qué decisiones toma en los siguientes ámbitos?
                li.mb--44
                  ul
                    li.mb--44
                      i.lista-ul__vineta
                      p.mb-0 Familia, cuidado personal y vivienda.
                    li.mb--44
                      i.lista-ul__vineta
                      p.mb-0 Salud (general, mental, sexual y reproductiva).
                    li.mb--44
                      i.lista-ul__vineta
                      p.mb-0 Patrimonio y manejo del dinero.
                    li.mb--44
                      i.lista-ul__vineta
                      p.mb-0 Trabajo y generación de ingresos.
                    li.mb--44
                      i.lista-ul__vineta
                      p.mb-0 Acceso a la justicia, participación ciudadana y ejercicio del voto
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 ¿Cuál de estos ámbitos considera más importante? ¿Por qué?

            .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema3/img24.png" alt="Imagen decorativa")

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Red de apoyo de la persona con discapacidad
    p.mb-4 Este punto busca identificar a las personas que conforman la red de apoyo de la persona con discapacidad, ya sean familiares, vecinas, vecinos o personas de su comunidad. Algunas preguntas útiles son:
    .row.justify-content-center.mb-4
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img25.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Con quién vive actualmente?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img26.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Quiénes le ayudan a tomar decisiones?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img27.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Quiénes le apoyan en sus actividades cotidianas?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img28.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Todas esas personas están presentes o falta alguien?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img29.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Tiene los datos de contacto de esas personas?
    .row.justify-content-center.mb-5
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img30.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿En quién confía más?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/img31.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Quién le ayuda a informarse sobre lo que ocurre?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/img32.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Quién le apoya para comunicarse con otras personas?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img33.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿En qué ámbitos cree que necesitará apoyo en el futuro?
      .col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema3/img34.svg', alt='Texto que describa la imagen')
          p.text-bold.text-center ¿Quién le gustaría que le brinde ese apoyo?
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  ¿Quiénes no pueden ser personas de apoyo?
    p.mb-4 Según el artículo 45 de la Ley 1996 de 2019, existen inhabilidades que impiden que una persona pueda ejercer como apoyo. Aunque la decisión final corresponde a un juez en el proceso de adjudicación judicial, es importante que la persona facilitadora esté atenta a posibles riesgos de vulneración de derechos. Estas inhabilidades incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img35.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4.w-100.h-100
            h5.mt-4.text-center Litigio pendiente
            p.text-center Existencia de un proceso judicial entre la persona con discapacidad y la posible persona de apoyo.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img36.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4.w-100.h-100
            h5.mt-4.text-center Conflicto de intereses
            p.text-center Cuando el apoyo podría beneficiar personalmente a quien lo brinda, afectando su imparcialidad.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img37.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4.w-100.h-100
            h5.mt-4.text-center Injerencia indebida
            p.text-center Uso de una relación de confianza para influir en decisiones contrarias a la voluntad de la persona con discapacidad.
    p.mb-4 Preguntas orientadoras para detectar estas situaciones:
    .tarjeta--BG08.p-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bloque-texto-c.color-secundario
            .row.justify-content-center.align-items-center
              .col-lg-7.order-2.order-lg-1.mb-4.mb-lg-0
                .px-4
                  .lista-ul.mb-0
                    li.mb--44
                      i.lista-ul__vineta
                      p.text-bold.mb-0 ¿Hay alguien que no debería estar presente en este espacio?
                    li.mb--44
                      i.lista-ul__vineta
                      p.text-bold.mb-0 ¿Alguien le exige tomar decisiones con las que no está de acuerdo?
                    li.mb--44
                      i.lista-ul__vineta
                      p.text-bold.mb-0 ¿Hay personas con las que siente desconfianza o temor?
                    li.mb--44
                      i.lista-ul__vineta
                      p.text-bold.mb-0 ¿Ha tenido conflictos no resueltos con alguna persona?
                    li.mb--44
                      i.lista-ul__vineta
                      p.text-bold.mb-0 ¿Tiene alguna denuncia o trámite judicial pendiente con alguien?
              .col-lg-5.col-10.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema3/img38.png', alt='Texto que describa la imagen')

      .titulo.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
        h5.mb-0  Patrimonio y manejo del dinero

      p.mb-4 Este punto no busca evaluar la situación socioeconómica, sino identificar qué tipo de apoyo necesita la persona con discapacidad para tomar decisiones relacionadas con su patrimonio. Las necesidades pueden variar según el contexto, edad, nivel educativo y planes futuros. Algunas preguntas en este ámbito son:

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img39.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          .lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Cómo usa el dinero en su vida cotidiana?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Sabe si tiene propiedades?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Tiene productos bancarios como cuentas o tarjetas?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Qué dificultades ha enfrentado en el manejo del dinero?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para saber cuánto dinero tiene disponible?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Requiere ayuda para distribuir su dinero?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para realizar compras o pagos?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Considera que necesita ayuda para tomar decisiones sobre sus bienes?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Requiere apoyo para decidir si desea adquirir productos bancarios?
            li.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita ayuda para cobrar su pensión?
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Familia, cuidado personal y vivienda

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="zoom-in")
        p Aquí se valora qué apoyos necesita la persona con discapacidad para tomar decisiones en su entorno familiar, de vivienda y cuidado personal. Algunas preguntas orientadoras son:
        .bloque-texto-c.bloque-texto-c.color-primario-beige.p-3
          .lista-ul.mb-0
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Las personas con quienes vive son familiares, amistades u otro tipo de vínculo?
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para decidir dónde y cómo vivir?
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Requiere ayuda para gestionar servicios de asistencia y cuidado personal?
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para decidir si desea casarse o vivir en pareja?
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Requiere apoyo para decidir si desea tener hijas o hijos?
            li.mb--4
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Qué planes tiene respecto a su familia y cuidado personal?
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img40.png" alt="Imagen decorativa")

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Salud
    p.mb-4 Este punto se enfoca en los apoyos necesarios para que la persona con discapacidad ejerza su autonomía en decisiones relacionadas con la salud, sin que se trate de una evaluación médica. Algunas preguntas son:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img41.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="zoom-in")
        .bloque-texto-c.color-primario.p-3
          ul.lista-ul.mb-0
            li.mb-0
              i.mb--44.lista-ul__vineta
              p.text-bold.mb-0 ¿Está afiliada/o a alguna EPS? ¿Cuál?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Sabe si pertenece al régimen contributivo o subsidiado?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Qué especialistas consulta y con qué frecuencia?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Asiste a terapias regularmente?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Qué medicamentos toma con frecuencia?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para solicitar servicios de salud?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Requiere ayuda para asistir a citas, exámenes o reclamar medicamentos?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para tomar decisiones sobre tratamientos médicos?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 En caso de hospitalización, ¿requiere apoyo para comprender los procedimientos médicos?
            li.mb--44.mb-0
              i.lista-ul__vineta
              p.text-bold.mb-0 ¿Necesita apoyo para autorizar exámenes o procedimientos?

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Trabajo y generación de ingresos
    p.mb-4 Este apartado busca identificar los apoyos necesarios para que la persona con discapacidad pueda ejercer su autonomía en decisiones relacionadas con el trabajo y la generación de ingresos. Algunas preguntas orientadoras son:

    .row.mb-4
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img42.svg' alt="Imagen decorativa")
        p.text-center ¿Qué barreras ha enfrentado en el ámbito laboral?

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img43.svg' alt="Imagen decorativa")
        p.text-center ¿Trabaja actualmente? ¿En qué?

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img44.svg' alt="Imagen decorativa")
        p.text-center ¿Necesita apoyo para decidir qué tipo de trabajo desea realizar?

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img44.svg' alt="Imagen decorativa")
        p.text-center ¿Requiere ayuda para comprender y gestionar condiciones de pago, prestaciones y formas de remuneración?


    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Cierre de la entrevista e informe final
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="zoom-in")
        p Al finalizar la entrevista, se debe realizar un cierre respetuoso del espacio y posteriormente elaborar un informe claro que determine los apoyos requeridos por la persona con discapacidad para el ejercicio de su autonomía.
        p Este informe puede derivar en dos escenarios:
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .bloque-texto-c.bloque-texto-c.color-primario-medio.tarjeta.h-100.p-4
              p.mb-0  #[b No formalización de apoyos:] cuando los apoyos se dan de manera natural en el entorno familiar o comunitario y no requieren formalización.
          .col-lg-6
            .bloque-texto-c.bloque-texto-c.color-primario-medio.tarjeta.h-100.p-4
              p.mb-0  #[b Formalización de apoyos:] cuando se requiere establecer un acuerdo de apoyo o iniciar un proceso de adjudicación judicial de apoyos.
        
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema3/img46.png" alt="Imagen decorativa")














</template>

<script>
export default {
  name: 'Tema3',
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
