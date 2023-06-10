import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-page-two',
  templateUrl: './routes-page-two.component.html',
  styleUrls: ['./routes-page-two.component.css'],
})
export class RoutesPageTwoComponent {
  public selectedTitle: string | undefined;
  public selectedImage: string | undefined;
  public selectedDescription: string | undefined;
  public selectedGeography: string | undefined;
  public selectedAttractions: string | undefined;

  markerData: any;

  // Verificar si el ancho del viewport para mostrar la vista movil o la desktop
  get isMobileView(): boolean {
    return window.innerWidth <= 992;
  }

  ngOnInit() {
    this.onMarkerClick(0);
  }

  // Información de los lugares para los 3 marcadores
  public markersData = [
    {
      title: 'Punta Gallinas',
      image: '/assets/img/punta-gallinas-guajira-1.jpg',
      description:
        'Punta Gallinas es uno de los lugares más fabulosos de Colombia ya que esta parte de país es un extremo de tierra ubicada al norte de la península de la Guajira, en este lugar se encuentran diferentes accidentes geográficos que forman una bahía desde Punta Gallinas hasta el Cabo de la Vela..',
      geography:
        'Punta Gallinas se encuentra a 47 metros sobre el nivel del mar, es una región en la que se dan temperaturas entre los 26°C y los 30°C. Es un lugar de clima cálido en el que se recomienda usar ropa cómoda para estos climas. Es indispensable contar con bloqueador solar y repelente para insectos.',
      attractions:
        'Punta Gallinas es el extremo norte de Suramérica, es un paisaje que se decora de un gran desierto bañado por una majestuosa playa azul. Punta Gallinas es un lugar maravilloso lleno de tranquilidad, un espacio perfecto para entrar en relajación y en plática con uno mismo. Uno de los atractivos de este lugar es que llegar a él resulta un tanto difícil, muchos turistas ven este lugar como un reto y como algo novedoso. El camino que conduce hasta Punta Gallinas da cuenta de la majestuosidad de paisajes que tiene Colombia, pero también, de la riqueza de cultura indígena wayuu que aún sigue manteniéndose, pues podrá ver la cultura de cerca.',
    },
    {
      title: 'Desierto de La Tatacoa',
      image: '/assets/img/tatacoa.jpg',
      description:
        'El desierto de la Tatacoa, como se le conoce famosamente a esta región ubicada en el Huila, no es exactamente un desierto, es más bien un bosque seco tropical que en el periodo terciario era un jardín repleto de árboles y flores que de a poco se fueron secando hasta convertirlo en lo que hoy parece ser un desierto color ocre y gris. Su nombre viene de las serpientes cascabel que habitan la región, ya que en el Huila a estas serpientes se les llama “Tatacoas”.',
      geography:
        'El desierto de la Tatacoa está ubicado entre el Río Magdalena y la cordillera Oriental y tiene una extensión de 330 kilómetros cuadrados a una altitud de 386 y 900 metros sobre el nivel del mar. La temperatura en el Desierto de la Tacaoa es variable, por ejemplo, al medio día puede alcanzar una temperatura de hasta 43°C pero en la noche puede bajar hasta los 18°C.',
      attractions:
        'El desierto de la Tatacoa en si es un atractivo turístico, es uno de los destinos más visitados en el Huila. Su paisaje erosionado semi-seco proporciona una sensación de tranquilidad inigualable. Es un lugar silencioso, como fantástico, en el que bien podrá encontrar singularidad de fauna, como serpientes cascabel, tortugas, arañas, águilas, lagartos y tigrillos. Esta región del país se caracteriza por tener uno de los más importantes centros de astronomía de Colombia, además de esto, el desierto ha sido escenario de excavaciones paleontológicas ya que es un yacimiento fosilífero de mares antiguos.',
    },
    {
      title: 'Caño Cristales',
      image: '/assets/img/cano-cristales-rio-de-los-7-colores.jpg',
      description:
        'Caño Cristales es considerado como el Río más hermoso del mundo entro otros muchos reconocimientos que se le hacen como el río de los dioses o el río de 5 colores. El maravilloso atractivo de este rio es que en su fondo habitan plantas que con la exposición solar cambian de color, haciendo del rio un espectáculo fuera de lo normal para los turistas. La Macarena, que antes era conocida por los cultivos de mata de coca, ahora es conocida por el encanto ecológico de Caño Cristales.',
      geography:
        'Caño Cristales está ubicado en la Serranía de la Macarena entre los 200 y 400 metros sobre el nivel del mar con un clima cálido – húmedo y una temperatura promedio de 27°C. Se recomienda llevar ropa cómoda y fresca de colores claros. Es importante saber que en Caño Cristales está prohibido el uso de bloqueador solar y repelente para mosquitos, por lo tanto, la mejor opción es llevar camisa manga larga y pantalón para protegerse de los mosquitos   y gorra o sombrero para protegerse de sol.',
      attractions:
        'Sin lugar a duda, el mayor atractivo en Caño Cristales son sus transparentes aguas y sus colores y la belleza de su paisaje. No por poco se le cataloga como el rio más hermoso del mundo. Si bien es difícil llegar a este encantador lugar, será compensado con una experiencia inolvidable en la que podrá disfrutar de la paz y tranquilidad de un ambiente natural con unas de las mejores aguas y paisajes del mundo.',
    }
  ];
  
  // Mostrar la info en el template
  public onMarkerClick(index: number) {
    this.markerData = this.markersData[index];
    this.selectedTitle = this.markerData.title;
    this.selectedImage = this.markerData.image;
    this.selectedDescription = this.markerData.description;
    this.selectedGeography = this.markerData.geography;
    this.selectedAttractions = this.markerData.attractions;
  }
  
}

