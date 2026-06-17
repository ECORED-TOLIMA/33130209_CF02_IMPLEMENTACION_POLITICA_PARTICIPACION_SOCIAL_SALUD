<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      Actividad(:cuestionario="cuestionario")
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
      tema:
        'Implementación y fortalecimiento de la participación ciudadana en salud',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar y aplicar procesos de participación social en salud, integrando actores, estrategias y mecanismos que contribuyan al mejoramiento del sistema de salud.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué busca la gestión de la participación en salud?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo informar a la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar a las instituciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar y fortalecer la participación ciudadana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La gestión organiza y fortalece la participación para que sea efectiva y con incidencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es el propósito de las estrategias en salud?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar recursos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Orientar acciones participativas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Generar información.', esCorrecta: false },
            { id: 'd', texto: 'Evaluar resultados.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Las estrategias orientan el para qué y el con quién en la participación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué permite el mapa de actores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar actores y su influencia.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Medir resultados.', esCorrecta: false },
            { id: 'c', texto: 'Diseñar recursos.', esCorrecta: false },
            { id: 'd', texto: 'Evaluar servicios.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite reconocer actores, intereses y niveles de influencia en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es una característica de los procesos participativos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son estructurados y progresivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo involucran instituciones.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Son espontáneos.', esCorrecta: false },
            { id: 'd', texto: 'No requieren información.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Son procesos organizados que permiten una participación progresiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué busca la educación para la participación?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar procesos.', esCorrecta: false },
            { id: 'b', texto: 'Informar únicamente.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Desarrollar capacidades en la ciudadanía.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Limitar decisiones.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Busca fortalecer habilidades para participar de manera informada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza la comunicación en salud?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Se limita a campañas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Es un proceso unidireccional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promueve el diálogo entre actores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo transmite información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La comunicación en salud es bidireccional y promueve interacción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es un ejemplo de pieza comunicativa?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluación.', esCorrecta: false },
            { id: 'b', texto: 'Infografía.', esCorrecta: true },
            { id: 'c', texto: 'Norma legal.', esCorrecta: false },
            { id: 'd', texto: 'Diagnóstico.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Las infografías son herramientas clave para comunicar información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué representan las acciones de participación?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Actividades concretas.', esCorrecta: true },
            { id: 'b', texto: 'Indicadores.', esCorrecta: false },
            { id: 'c', texto: 'Teoría.', esCorrecta: false },
            { id: 'd', texto: 'Normativa.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Son el nivel operativo donde se materializa la participación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es un factor de éxito en la participación?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Baja participación.', esCorrecta: false },
            { id: 'b', texto: 'Articulación de actores.', esCorrecta: true },
            { id: 'c', texto: 'Desinformación.', esCorrecta: false },
            { id: 'd', texto: 'Falta de continuidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente. La articulación fortalece procesos participativos integrados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué mide el impacto en participación en salud?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recursos usados.', esCorrecta: false },
            { id: 'b', texto: 'Cambios generados.', esCorrecta: true },
            { id: 'c', texto: 'Cantidad de normas.', esCorrecta: false },
            { id: 'd', texto: 'Número de reuniones.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El impacto se refleja en transformaciones reales en el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué orientan los ejes de participación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Recursos financieros.', esCorrecta: false },
            { id: 'b', texto: 'Solo evaluación.', esCorrecta: false },
            { id: 'c', texto: 'Actividades aisladas.', esCorrecta: false },
            { id: 'd', texto: 'Procesos estratégicos.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Muy bien. Los ejes estructuran la participación de manera integral.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza la toma de decisiones participativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No usa información.', esCorrecta: false },
            { id: 'b', texto: 'Es centralizada.', esCorrecta: false },
            { id: 'c', texto: 'Excluye a la comunidad.', esCorrecta: false },
            { id: 'd', texto: 'Integra múltiples actores.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente. Integra diferentes actores y perspectivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Para qué se usa la información en salud?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Archivar documentos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Tomar decisiones informadas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Controlar actores.', esCorrecta: false },
            { id: 'd', texto: 'Solo registrar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La información permite decisiones basadas en evidencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué permite la planeación participativa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir información.', esCorrecta: false },
            { id: 'b', texto: 'Improvisar acciones.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Definir prioridades con la comunidad.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar actores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Permite organizar acciones según necesidades del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es el propósito del seguimiento?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Finalizar procesos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Monitorear y ajustar acciones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Reemplazar la evaluación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Medir únicamente resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. El seguimiento permite mejorar continuamente las estrategias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué son los mecanismos de participación?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Espacios de intervención ciudadana.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Indicadores.', esCorrecta: false },
            { id: 'c', texto: 'Normas.', esCorrecta: false },
            { id: 'd', texto: 'Recursos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Son escenarios donde la ciudadanía participa activamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es un ejemplo de mecanismo de participación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estrategia.', esCorrecta: false },
            { id: 'b', texto: 'Evaluación.', esCorrecta: false },
            { id: 'c', texto: 'COPACOS.', esCorrecta: true },
            { id: 'd', texto: 'Diagnóstico.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien. Los COPACOS son espacios clave de participación comunitaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué permiten las redes de participación?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Limitar decisiones.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Articular actores y acciones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Aislar actores.', esCorrecta: false },
            { id: 'd', texto: 'Reducir comunicación.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente. Las redes fortalecen la cooperación y el trabajo conjunto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué busca el control social?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar estrategias.', esCorrecta: false },
            { id: 'b', texto: 'Crear normas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Vigilar la gestión en salud.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Informar únicamente.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite supervisar y mejorar la gestión del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué promueve la comunicación para el derecho a la salud?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control institucional.', esCorrecta: false },
            { id: 'b', texto: 'Desinformación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Acceso y ejercicio del derecho.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Exclusión.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente. La comunicación facilita el conocimiento y ejercicio del derecho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Buen resultado! Ha demostrado comprensión de los procesos de participación social en salud, evidenciando su capacidad para analizar estrategias, actores y mecanismos que fortalecen la toma de decisiones en el territorio.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
