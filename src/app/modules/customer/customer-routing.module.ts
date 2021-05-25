import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'invoice', component: InvoicesComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
 