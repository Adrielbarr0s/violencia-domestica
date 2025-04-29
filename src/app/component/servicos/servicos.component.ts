import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importado MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Importado MatButtonModule
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-servicos',
standalone: true,
  imports: [MatCardModule, MatButtonModule, NavbarComponent], // Adicionados MatCardModule e MatButtonModule
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
  hoveredCard: number | null = null;
  selectedCard: number | null = null;
  
  toggleCard(index: number): void {
    this.selectedCard = this.selectedCard === index ? null : index;
  }
}
