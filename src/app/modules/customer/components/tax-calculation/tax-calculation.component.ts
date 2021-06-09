import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoaderService } from 'src/app/common/loader/service/loader.service';
import { API } from 'src/app/const/api';
import { HttpGenericService } from 'src/app/services/http-services/http-genric.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tax-calculation',
  templateUrl: './tax-calculation.component.html',
  styleUrls: ['./tax-calculation.component.css']
})
export class TaxCalculationComponent implements OnInit {

  products:any;
  id: any;
  customer: any =[];
  invoice: any = [];
  taxOutput: any = [];
  showTax: boolean = false;

  constructor(private http: HttpClient, private httpGenericRouteSerivce: HttpGenericService,
    public loaderService: LoaderService ,private _location: Location, 
    public route:Router,private activeRoute: ActivatedRoute) {

      activeRoute.queryParams
      .subscribe((params) => {
        this.id = params.id;
        this.id = this.id.toString()
      });
  }
 
  ngOnInit() {
    this.httpGenericRouteSerivce
    .fetchAll("company/"+ API.quickbookCompanyId+ '/invoice/'+this.id+ '?&minorversion=57')
    .pipe(first())
    .subscribe((data: any) => {
     console.log("invoice",data) 
     if(data.Invoice) 
     {
       let temp:any =[];
       this.invoice= data.Invoice;
     }
    });
  }

  back(){
    this._location.back();
  }

  getAvaTax(){
    let lines: { number: any; quantity: any; amount: any; }[] = [];
    this.invoice.Line.forEach((element:any) => {
      if(element.DetailType === "SalesItemLineDetail")
      {
        let temp = {
          "number": element.Id,
          "quantity": element.SalesItemLineDetail.Qty,
          "amount": element.Amount
         }
         lines.push(temp)
      }
    });

    let obj={
      "lines": lines,
      "type": "SalesInvoice",
      "companyCode": "DEFAULT",
      "date": this.invoice.TxnDate,
      "customerCode": this.invoice.CurrencyRef.value,
      // "purchaseOrderNo": "2021-6-3",
      "addresses": {
        "singleLocation": {
          "line1": this.invoice.BillAddr.Line1,
          "city": this.invoice.BillAddr.City,
          "region": this.invoice.BillAddr.CountrySubDivisionCode,
          "country": this.invoice.BillAddr.Country,
          "postalCode": this.invoice.BillAddr.PostalCode
        }
      },
      "commit": true,
      "currencyCode": this.invoice.CurrencyRef.value,
      "description": this.invoice.CurrencyRef.value,
    }

    this.httpGenericRouteSerivce
    .postData(API.nodeEndPoint+"avalara/tax",obj)
    .pipe(first())
    .subscribe((data: any) => {
     console.log("Tax Output",data) 
     if(data.id >= 0)
     {
       this.taxOutput = data.summary;
       this.showTax = true;
     }
    });

  }
  

 

  
}  
