import { Component } from '@angular/core';
import { RepartidoresService } from './repartidores.service';
import { Paquete, Repartidor } from './repartidores.model';
import { Router } from '@angular/router';
import { PaquetesService } from '../tab2/paquetes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  repartidores!:Repartidor[];
  paquetes!:Paquete[];
  constructor(private repartidoresService: RepartidoresService, private router:Router ,private paquetesService:PaquetesService) {}

  ngOnInit() {
    this.repartidores = this.repartidoresService.getAllRepartidores();
    this.paquetes = this.paquetesService.getAllPaquetes();
  }
  goRepartidores (){
    this.router.navigate(['/repartidores']);
    //console.log("Funciona pulento")
  }
  goHome (){
    this.router.navigate(['']);
    //console.log("Funciona pulento")
  }
}
