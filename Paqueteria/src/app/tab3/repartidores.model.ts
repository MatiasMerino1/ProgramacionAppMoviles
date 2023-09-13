export interface Repartidor {
  id:string,
  nombre:string,
  apellido:string,
  ImgURL:string,
  rut:string,
}
export interface Paquete {
  id:string,
  nombrePaquete:string,
  repartidor:string,
  ImgURL:string,
  estado:string,
}
