import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YtappsPageRoutingModule } from './ytapps-routing.module';

import { YtappsPage } from './ytapps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YtappsPageRoutingModule
  ],
  declarations: [YtappsPage]
})
export class YtappsPageModule {}
