<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Aspectos adicionales para tener en cuenta en la valoración de apoyos
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La figura de las asistencias personales en Colombia aún no ha sido suficientemente explorada ni plenamente desarrollada, tanto en el ámbito normativo como en lo relacionado con la seguridad social para las personas con discapacidad. Sin embargo, es importante destacar que el Ministerio del Trabajo, en articulación con el Ministerio de Igualdad y Equidad, ha avanzado en la definición de los perfiles de asistente personal y cuidador(a) de personas con discapacidad, conforme al artículo 9° de la Ley 2297 de 2023. La formalización de estos perfiles permitirá contar con definiciones claras y avanzar hacia su reconocimiento institucional.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Asistencias personales y apoyos humanos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1.mb-4.mb-lg-0        
        p(data-aos="fade-left") En el proceso de valoración de apoyos, es fundamental considerar los diversos tipos de asistencias personales y apoyos humanos que las personas con discapacidad pueden requerir. El grado de asistencia personal varía según las necesidades individuales. Algunas personas requieren apoyo humano para actividades específicas como la higiene personal o la administración de medicamentos, en momentos puntuales del día. Otras necesitan acompañamiento más cercano, que puede incluir apoyo en la alimentación, labores de aseo, desplazamientos o participación en otras actividades cotidianas. Este tipo de asistencia puede extenderse durante varias horas al día y brindarse directamente en el hogar. También existen personas que requieren acompañamiento permanente, que incluye asistencia en todas las actividades básicas de la vida diaria, como la higiene, la alimentación, la movilidad, el aprendizaje y la comunicación.
        .row.align-items-center.bloque-texto-c.color-primario-claro.p-4.mb-4
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") En estos casos, los apoyos pueden ser diversos. Por ejemplo, se puede contar con interpretación en lengua de señas colombiana en momentos específicos, o con el acompañamiento de un guía intérprete para personas sordociegas, que facilita tanto la comunicación como el desplazamiento. También pueden existir asistencias relacionadas con el ejercicio de derechos sexuales, que implican apoyo en decisiones íntimas y personales.
      .col-lg-4.col-10.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
      .col-lg-11
        p.mb-0(data-aos="fade-left") Es esencial reconocer los distintos niveles de asistencia que las personas con discapacidad reciben en su entorno cercano, ya sea por vínculos de parentesco, amistad o confianza. Este último elemento —la confianza— es clave, ya que no solo se basa en la cercanía afectiva, sino también en la posibilidad de contar con personas expertas que faciliten la comprensión, como intérpretes de lengua de señas u otras figuras especializadas.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Ayudas vivas
    .bloque-texto-c.bloque-texto-c.color-primario-medio.tarjeta
      .row.justify-content-center.align-items-center
        .col-lg-8
          div(style="width: 7%;margin-left: 3%;margin-top: 3%;")
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
          .row.align-items-center.p-4
            p.mb-0 La valoración de apoyos también debe ajustarse a otras formas de asistencia, como las ayudas vivas. Por ejemplo, una persona ciega que cuenta con un perro guía, o una persona con discapacidad física que recibe apoyo de un animal entrenado para facilitar su movilidad, elección de objetos o como compañía emocional.
        .col-lg-4.col-10.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema4/img5.png', alt='Imagen decorativa')
        
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Apoyos tecnológicos y técnicos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema4/img7.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="zoom-in")
        p Asimismo, deben considerarse los apoyos tecnológicos, como herramientas, aplicaciones y desarrollos digitales que promuevan la autonomía y el ejercicio pleno de derechos. También están los técnicos, por ejemplo, la silla de ruedas para el desplazamiento.
        p Todos estos elementos, necesarios para ampliar y fortalecer las evaluaciones de apoyos, deben estar articulados dentro de un sistema nacional de cuidados, un sistema nacional de asistencias y un sistema nacional de seguridad social que garantice no solo el acceso a tecnologías de apoyo, sino también a ayudas vivas y asistencias humanas, con el objetivo de incrementar los niveles de autonomía de las personas con discapacidad.
        p.mb-0 Para cerrar la temática de este componente formativo, se presenta el siguiente video, que permite reforzar y profundizar algunos de los elementos abordados en relación con la valoración de apoyos.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
