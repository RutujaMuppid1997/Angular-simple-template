import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { TaxCalculationComponent } from './components/tax-calculation/tax-calculation.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'invoice', component: InvoicesComponent },
  { path: 'tax', component: TaxCalculationComponent },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
 