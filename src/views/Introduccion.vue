<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="zoom-in")
        p Seguramente, en el ejercicio de la labor como persona facilitadora de procesos de valoración de apoyos, pueden surgir diversas inquietudes relacionadas con el procedimiento. Algunas de ellas podrían ser:
        .bloque-texto-c.color-primario-oscuro.tarjeta.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.col-6.mb-lg-0.d-none.d-lg-block.mb-4(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/intro/img2.svg" alt="Imagen decorativa")

            .col-lg-10
              p.text-bold.mb-0 ¿A quién se debe realizar la entrevista en la valoración de apoyos?
              p.text-bold.mb-0 ¿Por qué ámbitos de la vida de la persona con discapacidad se debe preguntar?
              p.text-bold.mb-0 ¿Qué aspectos se deben tener en cuenta al momento de llevar a cabo la valoración de apoyos?
              p.text-bold.mb-0 ¿Qué debe contener el informe de valoración de apoyos?

      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/intro/img1.png" alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/intro/img3.svg" alt="Imagen decorativa")
      .col-lg-9
        p Estos elementos se desarrollarán en el presente componente formativo. Al finalizar su estudio, se espera que sea posible responder estas preguntas:
        .bloque-texto-c.color-secundario.p-3
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.text-bold.mb-0 ¿Qué es la valoración de apoyos?
              p.text-bold.mb-0 ¿Cuál es el procedimiento técnico de la valoración de apoyos?
              p.text-bold.mb-0 ¿Qué no es la valoración de apoyos?
              p.text-bold.mb-0 ¿Cómo se realiza la entrevista?
              p.text-bold.mb-0 ¿Qué preguntas se deben realizar?
              p.text-bold.mb-0 ¿Cómo se debe realizar el informe de valoración de apoyos?

            .col-lg-3.col-6.mb-lg-0.d-none.d-lg-block.mb-4(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/intro/img4.svg" alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/intro/img5.svg" alt="Imagen decorativa")
      .col-lg-11
        p Estos elementos permitirán desarrollar un proceso que responda adecuadamente a los requerimientos y particularidades de las personas con discapacidad, así como a los lineamientos técnicos establecidos. Para ello, será fundamental revisar previamente los antecedentes y retomar el concepto de valoración de apoyos.
        p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

            
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="343" height="194" src="https://www.youtube.com/embed/MaXJzUmamYw" title="Alcance y procedimiento de la valoración de apoyos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
