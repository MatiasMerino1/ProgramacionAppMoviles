import { Component, OnInit } from '@angular/core';
import { PaquetesService } from '../paquetes.service';
import { Router } from '@angular/router';
import { Paquete } from '../paquetes.model';

@Component({
  selector: 'app-add-paquete',
  templateUrl: './add-paquete.page.html',
  styleUrls: ['./add-paquete.page.scss'],
})
export class AddPaquetePage implements OnInit {

  constructor(private paquetesService:PaquetesService, private router:Router) { }

  ngOnInit() {
  }

  saveNewPaquete (nombrePaquete:any,ImgURL:any,repartidor:any,estado:any){
    this.paquetesService.newPaquete(nombrePaquete,ImgURL,repartidor,estado);
    console.log("No funciono :c")
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
