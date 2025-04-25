import { Routes } from '@angular/router';
import { PensamientoComputacionalComponent } from './pensamiento-computacional/pensamiento-computacional.component';
import { HerramientasComponent } from './herramientas/herramientas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PensamientoComputacionalComponent },
  { path: 'herramientas', component: HerramientasComponent }
];
