import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickBookGuard } from './gaurd/QuickBook.guard';

const routes: Routes = [
 
  // {
  //   path: 'home',  component: HomeComponent
  // },
 
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module')
      .then(m => m.CustomerModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
