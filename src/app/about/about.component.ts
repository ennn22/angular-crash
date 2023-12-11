import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
