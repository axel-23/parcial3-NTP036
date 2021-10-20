import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YtpremiumPageRoutingModule } from './ytpremium-routing.module';

import { YtpremiumPage } from './ytpremium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YtpremiumPageRoutingModule
  ],
  declarations: [YtpremiumPage]
})
export class YtpremiumPageModule {}
