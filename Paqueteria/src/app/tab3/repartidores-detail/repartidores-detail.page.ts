import { Component, OnInit } from '@angular/core';
import { PaquetesService } from 'src/app/tab2/paquetes.service';
import { RepartidoresService } from '../repartidores.service';
import { ActivatedRoute} from '@angular/router';
import { Repartidor } from '../repartidores.model';
import { Router } from '@angular/router';
import { Paquete } from 'src/app/tab2/paquetes.model';

@Component({
  selector: 'app-repartidores-detail',
  templateUrl: './repartidores-detail.page.html',
  styleUrls: ['./repartidores-detail.page.scss'],
})
export class RepartidoresDetailPage implements OnInit {

  constructor(private paquetesService:PaquetesService, private repartidoresService:RepartidoresService, private router:Router, private activatedRoute:ActivatedRoute) { }
repartidor!:Repartidor;
paquetes!:Paquete;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const rId = paramMap.get("repartidorId");
      this.repartidor = this.repartidoresService.getRepartidor(rId as string) as Repartidor;
      //console.log(this.paquetes);
    })
    ,
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const pId = paramMap.get("paqueteId");
      this.paquetes = this.paquetesService.getPaquete(pId as string) as Paquete;
    })
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
