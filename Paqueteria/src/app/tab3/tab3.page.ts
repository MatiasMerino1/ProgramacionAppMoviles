import { Component } from '@angular/core';
import { RepartidoresService } from './repartidores.service';
import { Repartidor } from './repartidores.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  repartidores!:Repartidor[];
  constructor(private repartidoresService: RepartidoresService, private router:Router) {}

  ngOnInit() {
    this.repartidores = this.repartidoresService.getAllRepartidores();
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
