import { Component } from '@angular/core';
import { Paquete } from './paquetes.model';
import { PaquetesService } from './paquetes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  paquetes!:Paquete[];
  constructor(private paquetesService:PaquetesService, private router:Router) {}
  ngOnInit() {
    this.paquetes = this.paquetesService.getAllPaquetes();
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
