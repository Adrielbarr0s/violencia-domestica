import { Route } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { ServicosComponent } from './component/servicos/servicos.component';
import { ContatoComponent } from './component/contato/contato.component';

export const routes: Route [] = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'contato', component: ContatoComponent},
];
