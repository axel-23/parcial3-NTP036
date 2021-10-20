import { Component, OnInit } from '@angular/core';

interface termino {
  question: string,
  answer: string
}

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  terminos: termino[] = [
    {
      question: 'Introducción',
      answer: 'Gracias por usar la plataforma de YouTube y los productos, servicios y características que ponemos a su disposición como parte de ella (en conjunto, el “Servicio”). '
    },
    {
      question: '¿Qué se incluye en estas Condiciones?',
      answer: 'Este índice está diseñado para ayudarte a navegar nuestras Condiciones del Servicio (las Condiciones). Esperamos que te resulte útil como guía, pero recuerda que igualmente debes leer las Condiciones en su totalidad.'
    },
    {
      question: 'Le damos la bienvenida a YouTube',
      answer: 'En esta sección, se describe nuestra relación contigo. Incluye una descripción del Servicio, define nuestro Acuerdo y menciona el nombre de tu proveedor de servicios.'
    },
    {
      question: '¿Quiénes pueden usar el servicio?',
      answer: 'En esta sección, se establecen determinados requisitos para el uso del Servicio y se definen categorías de usuarios.'
    },
    {
      question: 'Tu uso del Servicio',
      answer: 'En esta sección, se explican tu derecho a usar el Servicio y las condiciones que se aplican cuando lo haces. También se explica la forma en la que modificamos el Servicio.'
    },
    {
      question: 'Tu contenido y conducta',
      answer: 'Esta sección se aplica a los usuarios que aportan Contenido al Servicio. Define el alcance de los permisos que otorgas cuando subes tu Contenido y también incluye tu compromiso de no subir nada que infrinja los derechos de otra persona.'
    },
    {
      question: 'Suspensión y rescisión de cuentas',
      answer: 'En esta sección, se explica la manera en la que tú y YouTube pueden resolver esta relación.'
    },
    {
      question: 'Acerca del software del Servicio',
      answer: 'En esta sección, se incluyen detalles acerca del software del Servicio.'
    },
    {
      question: 'Otros términos legales',
      answer: 'Esta sección incluye las obligaciones legales de las partes. También se explica que hay determinados aspectos sobre los cuales no asumimos responsabilidad.'
    },
    {
      question: 'Acerca de este acuerdo',
      answer: 'Esta sección contempla algunos detalles adicionales sobre nuestro contrato, incluido lo que puedes esperar en caso de que necesitemos modificar estas Condiciones y cuál es su legislación correspondiente.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
