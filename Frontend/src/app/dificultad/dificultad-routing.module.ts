import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DificultadPage } from './dificultad.page';

const routes: Routes = [
  {
    path: '',
    component: DificultadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DificultadPageRoutingModule {}
