import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio/inicio.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioPage,
  },
  {
    path: 'go-to',
    loadChildren: () => import('./go-to/go-to.module').then( m => m.GoToPageModule)
  },
  {
    path: 'dificultad',
    loadChildren: () => import('./dificultad/dificultad.module').then( m => m.DificultadPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'pregunta/:category/:difficulty/:number',
    loadChildren: () => import('./pregunta/pregunta.module').then(m => m.PreguntaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    IonicModule,
    CommonModule
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
