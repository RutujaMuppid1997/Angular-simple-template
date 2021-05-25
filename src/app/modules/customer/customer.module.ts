import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { TableModule } from 'primeng/table';
import { InvoicesComponent } from './components/invoices/invoices.component';



@NgModule({
  declarations: [CustomerComponent, InvoicesComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    TableModule
  ]
})
export class CustomerModule { }
