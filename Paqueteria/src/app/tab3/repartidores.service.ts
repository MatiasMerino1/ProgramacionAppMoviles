import { Injectable } from '@angular/core';
import { Repartidor } from './repartidores.model';
import { Router } from '@angular/router';
import { PaquetesService } from '../tab2/paquetes.service';
import { Paquete } from '../tab2/paquetes.model';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  public repartidores:Repartidor[] = [
    {
      id:'1',
      nombre:"Pepito",
      apellido:"Gonzales",
      ImgURL:"https://i.pinimg.com/236x/38/3d/dc/383ddce37a5f0e2017736f5ba2d49ea6.jpg",
      rut:"13441234-2",
    },
    {
      id:'2',
      nombre:"Asclepio",
      apellido:"Oikonnomu",
      ImgURL: "https://randomuser.me/api/portraits/men/41.jpg",
      rut:"12334563-4",
    }
  ];
  public paquetes:Paquete[] = [
    {
      id:'1',
      nombrePaquete:'Mouse Gamer',
      repartidor:'Pepito',
      ImgURL:"https://www.gsmpro.cl/cdn/shop/products/micronics-mouse-optico-gamer-m837_600x.png?v=1670442221",
      estado:"Por Repartir",
    },
    {
      id:'2',
      nombrePaquete:'Teclado Gamer',
      repartidor:'Asclepio',
      ImgURL:"https://falabella.scene7.com/is/image/Falabella/gsc_112633624_340699_1?wid=1500&hei=1500&qlt=70",
      estado:"Por Repartir",
    }

  ]
  selectedId: string = '1'; // ID seleccionada por defecto
  constructor(private router:Router ,private paquetesService:PaquetesService) { }


  getAllRepartidores(){
    return [...this.repartidores];
  }
  getRepartidor (repartidorId:string) {
    return {
      ...this.repartidores.find(repartidor=>{
        return repartidor.id === repartidorId;
      })
    };
  }
  newRepartidor (nombre:any, apellido:any, ImgURL:any, rut:any){
    this.repartidores.push({
      nombre,
      apellido,
      ImgURL,
      rut,
      id:this.repartidores.length+1+""
    });
  }
  getAllPaquetes () {
    return [...this.paquetes];
  }
  getPaquete (paqueteId:string) {
    return {
      ...this.paquetes.find(paquete => {
        return paquete.id === paqueteId;

      })
    };
  }
}
