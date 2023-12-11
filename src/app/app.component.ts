import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { MyFirstService } from './services/my-first.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyFirstCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MyFirstService]
})
export class AppComponent {
  title = 'angular-crash';
}
