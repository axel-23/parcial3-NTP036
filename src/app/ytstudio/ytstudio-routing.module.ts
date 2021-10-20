import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YtstudioPage } from './ytstudio.page';

const routes: Routes = [
  {
    path: '',
    component: YtstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YtstudioPageRoutingModule {}
