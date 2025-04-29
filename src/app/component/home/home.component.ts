import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarFixaComponent } from '../navbar-fixa/navbar-fixa.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarFixaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
