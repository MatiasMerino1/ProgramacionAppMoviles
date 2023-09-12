import { Injectable } from '@angular/core';
import { Paquete } from './paquetes.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

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

  constructor(private router:Router) { }

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
  newPaquete (nombrePaquete:any,ImgURL:any,repartidor:any,estado:any){
    this.paquetes.push({
      nombrePaquete,
      ImgURL,
      repartidor,
      estado,
      id:this.paquetes.length+1+""
    });
  }
  goPaquetes (){
    this.router.navigate(['/paquetes']);
    //console.log("Funciona pulento")
  }
  goHome (){
    this.router.navigate(['']);
    //console.log("Funciona pulento")
  }
}
