import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoaderService } from 'src/app/common/loader/service/loader.service';
import { API } from 'src/app/const/api';
import { HttpGenericService } from 'src/app/services/http-services/http-genric.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  products:any=[];
  searchText:any = "";
  constructor(private http: HttpClient, private httpGenericRouteSerivce: HttpGenericService,
    public loaderService: LoaderService , 
    public route:Router) {
  }
 
  ngOnInit() {
    this.httpGenericRouteSerivce
    .fetchAll(API.nodeEndPoint+"quickbook/getCustomers")
    .pipe(first())
    .subscribe((data: any) => {
     console.log(data)
     if(data.QueryResponse)
     {
       this.products= data.QueryResponse.Customer;
     }

    });

  }

  getInvoice(customer:any){
    console.log(customer)
    this.route.navigateByUrl('customer/invoice?id=' + customer.Id);
  }

  
}  

