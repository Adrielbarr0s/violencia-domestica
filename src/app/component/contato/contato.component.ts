import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importado MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Importado MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Importado MatIconModule
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contato',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, NavbarComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  hoveredCard: number | null = null;
  
  toggleCard(index: number): void {
    this.hoveredCard = this.hoveredCard === index ? null : index;
  }
}
