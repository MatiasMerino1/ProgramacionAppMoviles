import { Injectable } from '@angular/core';
import { Repartidor } from './repartidores.model';
import { Router } from '@angular/router';

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
  ]
  constructor(private router:Router) { }


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
}
