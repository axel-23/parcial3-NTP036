import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YtpremiumPage } from './ytpremium.page';

const routes: Routes = [
  {
    path: '',
    component: YtpremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YtpremiumPageRoutingModule {}
