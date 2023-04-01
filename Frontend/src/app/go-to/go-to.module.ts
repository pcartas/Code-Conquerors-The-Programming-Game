import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoToPageRoutingModule } from './go-to-routing.module';

import { GoToPage } from './go-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoToPageRoutingModule
  ],
  declarations: [GoToPage]
})
export class GoToPageModule {}
