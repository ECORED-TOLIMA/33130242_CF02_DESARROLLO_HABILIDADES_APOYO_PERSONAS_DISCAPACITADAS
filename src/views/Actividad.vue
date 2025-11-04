<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Procedimiento de la valoración de apoyos',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar la apropiación de los conocimientos sobre el procedimiento de la valoración de apoyos',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: 'Una valoración de apoyos es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Examen de condiciones de vida, habilidades, fortalezas y desafíos en el entorno familiar de la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluación de barreras que dificultan interacciones y decisiones autónomas en personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Valoración centrada en fortalezas, sin considerar los desafíos que enfrenta la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluación de barreras y apoyos necesarios para fortalecer decisiones autónomas y participación de la persona con discapacidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Todas las personas con discapacidad requieren de una valoración de apoyos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, porque permite revisar si la persona necesita apoyos para tomar decisiones autónomas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, porque todas las personas con discapacidad necesitan apoyos para decidir en cualquier situación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, porque solo quienes enfrentan barreras para decidir requieren valoración y acompañamiento para ejercer su autonomía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No, porque todas las personas con discapacidad tienen plena capacidad jurídica en todos los casos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elementos deben tenerse en cuenta antes de realizar una valoración de apoyos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se estudia exclusivamente el diagnóstico médico y la historia clínica para definir los ajustes razonables necesarios durante la valoración de apoyos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se analiza detallada y exclusivamente el diagnóstico e historia clínica para decidir si se entrevista a la persona con discapacidad o a quien le acompaña.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se revisa exclusivamente el diagnóstico e historia clínica como base para diseñar entrevista semi estructurada y aplicarla personalmente a quien solicitó la valoración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se examina diagnóstico e historia clínica para identificar ajustes razonables que se aplicarán en la entrevista semi estructurada de valoración.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La entrevista que se le realiza a la persona debe ser:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Semi estructurada porque se requiere de una preparación previa por parte del facilitador para determinar qué preguntas necesita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estructurada, porque tiene preguntas seleccionadas por el facilitador, quien elige las que considere convenientes, según lo que observe en la entrevista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Semi estructurada, con estudio previo y ajustes razonables que garanticen comprensión plena por parte de la persona entrevistada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Estructurada, con preguntas predeterminadas aplicadas igual para cualquier tipo de discapacidad, sin considerar diferencias individuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es un acuerdo de apoyos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documento elaborado por familiares para que la persona con discapacidad pueda expresar sus decisiones con acompañamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documento elaborado por persona facilitadora con la persona con discapacidad, que define ajustes razonables y apoyos necesarios para tomar decisiones autónomas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Documento redactado por el equipo facilitador luego de realizar la evaluación de apoyos correspondiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documento elaborado por la persona con discapacidad junto a su familia y el equipo facilitador que la acompaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Con quién debe hacerse la entrevista que se le realiza a la persona con discapacidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De manera individual con la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Con la persona con discapacidad acompañada de su apoyo más cercano, en caso de requerirlo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Con quien haya solicitado la valoración de apoyos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Con el núcleo familiar para que indique qué necesita la persona y por qué requiere la valoración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Se necesita una valoración de apoyos para un acuerdo de apoyos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, porque para cualquier creación de documentos de una persona con discapacidad se necesita una valoración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, porque el acuerdo implica decisiones importantes y requiere valoración para confirmar si la persona con discapacidad está en capacidad de realizarlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No se necesita, dado que las personas con discapacidad tienen plena capacidad y con eso basta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No, las personas con discapacidad que pueden exteriorizar su decisión y preferencias pueden realizar acuerdo de apoyos válidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿La valoración de apoyos se necesita para instaurar y abrir un proceso de adjudicación judicial de apoyos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, aunque no es requisito de procedibilidad y el Juez podrá pedirla, es importante el análisis de este en el proceso judicial. Desde la demanda, ahorra tiempos y etapas procesales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sí, porque las familias deciden cuándo y cómo presentar la demanda para adjudicación, incluyendo la valoración de apoyos correspondiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, porque las personas con discapacidad tienen capacidad plena y el juez decide si se requiere valoración durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No, porque el juez determina discrecionalmente si la persona con discapacidad necesita valoración para iniciar el proceso judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se debe hacer cuando no es posible la suscripción del apoyo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Explicarle a la persona con discapacidad que no se puede hacer la suscripción del apoyo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Si es en una notaría se debe realizar un acta y si es en un Centro de Conciliación en la constancia de audiencia privada se debe indicar esta situación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como no es posible la suscripción del acuerdo de apoyo se remite el caso por competencia al Juez de Familia para que adelante una adjudicación judicial de apoyos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como no es posible realizar la suscripción del acuerdo de apoyo, la persona con discapacidad no puede iniciar posteriormente un trámite sobre el mismo caso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Una valoración de apoyos contiene:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un diagnóstico Médico.', esCorrecta: false },
            { id: 'b', texto: 'Una valoración pedagógica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una valoración de necesidades insatisfechas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ninguna de las anteriores.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Al realizar una valoración de apoyos, esta se dirige a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una persona que podría tener alguna discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una persona con discapacidad que requiere apoyo en decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una persona con diversidad funcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumplen los apoyos para las personas con discapacidad en el proceso de valoración de apoyos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Les permite informarse, comunicarse y comprender plenamente lo que se le plantea y lo que se pretende realizar mediante la valoración.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Les permite entender la importancia que sea una persona externa de confianza, la que tome las decisiones por ellas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Les permite reconocer la importancia de la familia, como núcleo fundamental de la sociedad y la importancia de que sean estas quienes brinden los apoyos respectivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Les permite comunicarse y comprender que las actividades sociales son fundamentales para garantizar su inclusión en el contexto comunitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Según la Ley 1996 de 2019 y la Convención sobre los Derechos de las Personas con Discapacidad, son principios fundamentales que garantizan la autonomía y capacidad jurídica, excepto:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las personas con discapacidad son sujetos plenos de derechos; sus decisiones deben ser respetadas, aceptadas y acatadas por todas las personas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El principio de accesibilidad garantiza ajustes razonables para que personas con discapacidad comprendan, se informen y comuniquen sus decisiones libremente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se reconoce la red de apoyos, elegida libremente por la persona con discapacidad, basada en parentesco, amistad o confianza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Deben tener autorización permanente de terceros para ejercer sus derechos y tomar decisiones personales en cualquier situación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es uno de los aspectos fundamentales que debe considerarse al inicio de la entrevista para la valoración de apoyos a una persona con discapacidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Explicar consentimiento informado y pasos del proceso a la persona con discapacidad y su red de apoyo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Indagar motivaciones, proyecto de vida y red de apoyo de la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar situación socioeconómica y apoyos necesarios para decisiones patrimoniales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar apoyos para decisiones autónomas sobre trabajo, ingresos y condiciones laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Según la Corte Constitucional de Colombia, ¿cuáles son los componentes que definen la capacidad jurídica de una persona con discapacidad, como titulares plenas de derechos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Capacidad de goce.', esCorrecta: true },
            { id: 'b', texto: 'Capacidad de ejercicio.', esCorrecta: true },
            { id: 'c', texto: 'Capacidad de dependencia.', esCorrecta: false },
            { id: 'd', texto: 'Capacidad restringida', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuáles aspectos deben considerarse durante la entrevista en el proceso de valoración para garantizar la autonomía de la persona con discapacidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar condiciones físicas, sensoriales y psicoemocionales de la persona con discapacidad en su entorno cotidiano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Identificar barreras actitudinales, físicas y comunicativas que puedan limitar la toma de decisiones autónomas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Promover un ambiente seguro y de confianza que facilite el diálogo y la expresión libre de decisiones',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aplicar una lista de verificación rígida que limite la conversación y estandarice el análisis de cada caso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Algunos aspectos que deben incluirse en la solicitud de valoración de apoyos para una persona con discapacidad, de acuerdo con el procedimiento establecido son:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Datos personales de la persona con discapacidad y del solicitante, si aplica, incluyendo identificación, contacto, nivel educativo y estado civil.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Motivación de la solicitud, razones por las cuales se considera que la persona con discapacidad requiere valoración de apoyos para decidir autónomamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Descripción clara de los actos jurídicos para los cuales se solicita la valoración de apoyos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Describir claramente cómo la persona con discapacidad se comunica en su vida diaria, incluyendo métodos, apoyos y necesidades específicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Dado que la capacidad jurídica es inherente a todas las personas con discapacidad, el acuerdo de apoyos garantiza que cada persona decida libremente cómo, cuándo y en qué situaciones recibir apoyo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Para la preparación previa al encuentro con la persona con discapacidad en la valoración de apoyos, se debe evitar leer la solicitud y revisar documentos anexos, pues ello puede prejuiciar.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Es fundamental que la persona facilitadora interactúe directamente con la persona con discapacidad, considerando ajustes razonables y herramientas de accesibilidad, dirigiendo preguntas con contacto visual y verbal, no a su red de apoyo.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
