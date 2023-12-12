import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../services/api/products/product.service';
// import { ProductRepresentation } from '../services/api/models/product-representation';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // constructor(
  //   private service: ProductService
  // ) {}

  // ngOnInit(): void {
  //   const product: ProductRepresentation = {
  //     title: 'My product',
  //     description: 'My description',
  //     price: 12,
  //     category: 'My category',
  //     image: 'https://some-image.jpg'
  //   }
  //   this.service.createProduct(product)
  //     .subscribe({
  //       next: (result) => {
  //         console.log(result);
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         if (error instanceof ErrorEvent) {
  //           // console.error('An error occurred:' + error.error.message);
  //           console.error('Error', error);
  //         } else {
  //           // server side error
  //           console.error(`Server returned status code:${error.status}, error message: ${error.message}`)
  //         }
  //       }
  //     })
    // this.service.getAllProductsWithLimit()
    //   .subscribe({
    //     next: (data) => {
    //       console.log(data);
    //     }
    //   })
  // }
  // implements OnInit{

  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ) {
  // }
  // param: any;
  // queryParam: any;

  // // Get param & query param from path
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  // }
}
