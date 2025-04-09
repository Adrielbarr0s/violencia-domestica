import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importado MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Importado MatButtonModule

@Component({
  selector: 'app-contato',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  hoveredCard: number | null = null;
  selectedCard: number | null = null;
  
  toggleCard(index: number): void {
    this.selectedCard = this.selectedCard === index ? null : index;
  }
}
