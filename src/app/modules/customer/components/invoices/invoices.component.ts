import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { LoaderService } from 'src/app/common/loader/service/loader.service';
import { HttpGenericService } from 'src/app/services/http-services/http-genric.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  products:any;
  id: any;
  customer: any =[];

  constructor(private http: HttpClient, private httpGenericRouteSerivce: HttpGenericService,
    public loaderService: LoaderService , 
    public route:Router,private activeRoute: ActivatedRoute) {

      activeRoute.queryParams
      .subscribe((params) => {
        this.id = params.id;
        this.id = this.id.toString()
      });
  }
 
  ngOnInit() {
    this.httpGenericRouteSerivce
    .fetchAll("company/4620816365164524170"+ '/customer/'+ this.id + '?')
    .pipe(first())
    .subscribe((data: any) => {
     console.log(data) 
     if(data.Customer) 
     {
       this.customer= data; 
     }
     this.getInvoices()
    });

  }

  getInvoices(){
    this.httpGenericRouteSerivce
    .fetchAll("company/4620816365164524170"+ '/query/' + '?query=SELECT%20*%20FROM%20Invoice%20WHERE%20CustomerRef%20%3D%20'+"'"+ this.id+"'"+ '&minorversion=57')
    .pipe(first())
    .subscribe((data: any) => {
     console.log(data) 
     if(data.QueryResponse) 
     {
       let temp:any =[];
       this.products= data.QueryResponse.Invoice;
      //  this.products.forEach((element: any) => {
      //    if(element.CustomerRef.value === this.id)
      //    {
      //      temp.push(element);
      //    }
      //  });
      //  this.products=temp;
     }

    });

  }

  getTaxCalculated(customer:any){
    console.log(customer)
    this.route.navigateByUrl('customer/tax?id=' + customer.Id);
  }

 

  
}  

