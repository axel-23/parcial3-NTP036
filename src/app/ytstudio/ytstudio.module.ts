import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YtstudioPageRoutingModule } from './ytstudio-routing.module';

import { YtstudioPage } from './ytstudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YtstudioPageRoutingModule
  ],
  declarations: [YtstudioPage]
})
export class YtstudioPageModule {}
