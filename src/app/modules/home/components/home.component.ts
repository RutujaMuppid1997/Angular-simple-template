import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import * as Highcharts from 'highcharts'; 
import { LoaderService } from '../../../common/loader/service/loader.service';
import { Router } from '@angular/router';
import { HttpGenericService } from 'src/app/services/http-services/http-genric.service';
import { first } from 'rxjs/operators';
import { API } from 'src/app/const/api';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time!: string;
  today: number = Date.now();
  visibleSidebar1 :boolean = false;
  title = 'QuickBookBank';
  selectedItem: any;
  toolbarWallet!: string
  products:any=[];

  constructor(private http: HttpClient, private httpGenericRouteSerivce: HttpGenericService,
    public loaderService: LoaderService , 
    public route:Router) {
  }
 

  ngOnInit() {
    let companyId=localStorage.getItem('companyID')
    this.httpGenericRouteSerivce
    .fetchAll("company/" + companyId+ '/query/' + '?query=select%20%2a%20from%20CompanyInfo&minorversion=57')
    .pipe(first())
    .subscribe((data: any) => {
     console.log(data)
     if(data.QueryResponse)
     {
       this.products= data.QueryResponse.CompanyInfo;
     }

    });

  }

  

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
      })
  }

  visibleSidebar(){
    this.visibleSidebar1 = true;
  }


}  

