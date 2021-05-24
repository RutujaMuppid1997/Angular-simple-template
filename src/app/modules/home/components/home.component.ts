import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import * as Highcharts from 'highcharts'; 
import { LoaderService } from '../../../common/loader/service/loader.service';
import { Router } from '@angular/router';





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

  constructor(private http: HttpClient, public loaderService: LoaderService , public route:Router) {

  }
 

  ngOnInit() {
   
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

