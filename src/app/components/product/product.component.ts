import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  filterText ="";

  constructor(
    private productService: ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((reponse) => {
      this.products = reponse.data;
      this.dataLoaded=true;
    });
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((reponse) => {
      this.products = reponse.data;
      this.dataLoaded=true;
    });
  }
  addToCart(product:Product){
    if(product.productId===1){
      this.toastrService.error("Sepete Eklenemedi")
    }
    else{
      this.toastrService.success("Sepete Eklendi",product.productName)
      this.cartService.addToCart(product)
    }
  }
}
