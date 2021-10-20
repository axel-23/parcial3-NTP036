import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ytstudio',
    loadChildren: () => import('./ytstudio/ytstudio.module').then( m => m.YtstudioPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'ytpremium',
    loadChildren: () => import('./ytpremium/ytpremium.module').then( m => m.YtpremiumPageModule)
  },
  {
    path: 'memberships',
    loadChildren: () => import('./memberships/memberships.module').then( m => m.MembershipsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'ytapps',
    loadChildren: () => import('./ytapps/ytapps.module').then( m => m.YtappsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
