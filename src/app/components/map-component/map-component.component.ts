import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['././map-component.component.css']

})

export class MapComponentComponent implements OnInit {

  @Output() markerClicked: EventEmitter<number> = new EventEmitter<number>();
  zoom!: number;
  
  ngOnInit() {
    // Inicializa el mapa
    this.initMap();
  }

  // Deternina el zoom del mapa dependiendo de la ventana del navegador
  mapZoom() {
    if (window.innerWidth <= 576) {
      this.zoom = 5;
    } else {
      this.zoom = 6;
    };
    return this.zoom;
  }

  // Crea el mapa y agrega los marcadores
  initMap() {
    const colombia = { lat: 5.6170, lng: -73.8212 }; // centrar el mapa con los 3 marcadores
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: this.mapZoom(),
      center: colombia,
    });

    const markers = [
      {
        title: 'Punta Gallinas',
        position: { lat: 12.4583, lng: -71.6606 },
      },
      {
        title: 'Desierto de la Tatacoa',
        position: { lat: 3.1639, lng: -75.1703 },
      },
      {
        title: 'Caño Cristales',
        position: { lat: 2.2236, lng: -73.7853 },
      }
    ];

    markers.forEach((marker, index) => {
      const newMarker = new google.maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title
      });
      // Agregar evento que muestra la info del lugar selecionado en el mapa al hacer click en un marcador
      newMarker.addListener('click', () => {
        this.markerClicked.emit(index);
      });
      // Agregar evento para mostrar el título al pasar el cursor sobre el marcador
      newMarker.addListener('mouseover', function() {
        const infowindow = new google.maps.InfoWindow({
          content: marker.title
        });
        infowindow.open(map, newMarker);

        // Cerrar el cuadro de información al quitar el cursor del marcador
        newMarker.addListener('mouseout', function() {
          infowindow.close();
        });
      });
    });
  };
}



