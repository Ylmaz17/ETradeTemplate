import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = { productId: 1, productName: "Kalem", categoryId: 1, unitPrice: 10 }
  product1 = { productId: 2, productName: "Masa", categoryId: 1, unitPrice: 10 }
  product2 = { productId: 3, productName: "Bilgisayar", categoryId: 1, unitPrice: 10 }
  product3 = { productId: 4, productName: "Mouse", categoryId: 1, unitPrice: 10 }
  product4 = { productId: 5, productName: "Telefon", categoryId: 1, unitPrice: 10 }

  products = [this.product, this.product1, this.product3, this.product4, this.product2]
  constructor() { }

  ngOnInit(): void {
  }

}
