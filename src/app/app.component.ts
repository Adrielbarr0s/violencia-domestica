import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { SobreComponent } from "./component/sobre/sobre.component";
import { ServicosComponent } from "./component/servicos/servicos.component";
import { ContatoComponent } from "./component/contato/contato.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template:
    `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'violencia-domestica';
}
