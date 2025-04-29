import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sobre',
  imports: [MatCardModule, MatButtonModule, NavbarComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  hoveredCard: number | null = null;
  selectedCard: number | null = null;
  
  toggleCard(index: number): void {
    this.selectedCard = this.selectedCard === index ? null : index;
  }
}
