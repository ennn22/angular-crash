import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
// import { HttpErrorResponse } from '@angular/common/http';

import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: ProductRepresentation[] = [];
  constructor(
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result;
        }
        // error: (error: HttpErrorResponse) => {
        //   if (error instanceof ErrorEvent) {
        //     // console.error('An error occurred:' + error.error.message);
        //     console.error('Error', error);
        //   } else {
        //     // server side error
        //     console.error(`Server returned status code:${error.status}, error message: ${error.message}`)
        //   }
        // }
      })
}}
