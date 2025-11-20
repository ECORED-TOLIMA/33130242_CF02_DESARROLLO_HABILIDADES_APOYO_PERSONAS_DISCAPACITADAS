<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente formativo se aborda el concepto de valoración de apoyos, sus antecedentes normativos y su relevancia en términos de autonomía, autodeterminación y accesibilidad para las personas con discapacidad. Se delimita claramente su alcance integral y se diferencia de otros tipos de informes o intervenciones en diversos campos. Asimismo, se plantean las habilidades esenciales que debe tener una persona facilitadora de apoyos, destacando el conocimiento sobre discapacidad, la normativa vigente, los tipos de apoyos y el valor de la autonomía.
    p También se describen las etapas del proceso técnico de la valoración, que incluyen la solicitud, la preparación o aprestamiento y la realización de la entrevista. Esta última permite explorar aspectos como la salud, la familia, el patrimonio, el trabajo y la participación ciudadana, entre otros, con el fin de identificar las decisiones en las que se requieren apoyos y determinar su tipo y alcance.
    p Finalmente, se abordan elementos adicionales a considerar en la valoración, como los apoyos humanos, técnicos, tecnológicos y ayudas vivas, fundamentales para garantizar la accesibilidad.
   

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis del componente formativo sobre la valoración de apoyos. El diagrama expone cuatro bloques principales: antecedentes, concepto, proceso técnico y aspectos adicionales. Cada bloque despliega sus subtemas: descripción y antecedentes; habilidades de la persona facilitadora y qué no es una valoración; contenido de la solicitud, preparación y entrevista previa; y finalmente asistencias personales, ayudas vivas y apoyos tecnológicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
