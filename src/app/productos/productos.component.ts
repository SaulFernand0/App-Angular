import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [{idproducto: 1, nombre: "Leche", precio: 3.20, cantidad: 12}, {idproducto: 2, nombre: "Galleta", precio: 1.00, cantidad: 24}, {idproducto: 3, nombre: "Huevo", precio: 0.50, cantidad: 10}]
  constructor() { }

  ngOnInit(): void {
  }

}
