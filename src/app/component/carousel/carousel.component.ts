import { Component, OnInit, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    './assets/images/carousel1.png',
    './assets/images/carousel2.png',
    './assets/images/carousel3.png'
  ];

}
