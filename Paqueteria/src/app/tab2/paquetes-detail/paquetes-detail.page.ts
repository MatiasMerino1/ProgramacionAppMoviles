import { Component, OnInit } from '@angular/core';
import { Paquete } from '../paquetes.model';
import { PaquetesService } from '../paquetes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paquetes-detail',
  templateUrl: './paquetes-detail.page.html',
  styleUrls: ['./paquetes-detail.page.scss'],
})
export class PaquetesDetailPage implements OnInit {
  paquetes!:Paquete;
  constructor(private paquetesService:PaquetesService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const pId = paramMap.get("paqueteId");
      this.paquetes = this.paquetesService.getPaquete(pId as string) as Paquete;
      //console.log(this.paquetes);
    })
  }
  //Función para volver a la página de paquetes
  goPaquetes (){
    this.router.navigate(['/paquetes']);
    //console.log("Funciona pulento")
  }

}
