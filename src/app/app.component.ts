import { Component } from '@angular/core';
import { NewComponent } from './component/new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [NewComponent],
  template:
    `
    <!-- <router-outlet></router-outlet> -->
    <h1>Ajuda no combate à violência doméstica</h1>
    <app-new-component />
    `,
  styles: [`
    *{
      background-color:rgba(152, 168, 247, 0.3);
    }
    h1 {
      color: #369;
      font-family: Helvetica;
      font-size: 250%;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'violencia-domestica';
}
