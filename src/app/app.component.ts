import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var $: any;
import { LoaderService } from './common/loader/service/loader.service';
import { HttpGenericService } from "../app/services/http-services/http-genric.service";
declare var require: any
const swal = require("sweetalert");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, public loaderService: LoaderService,
    private httpGenericRouteSerivce: HttpGenericService,
  ) {
 
  }

  ngOnInit() {
    
  }

 
}

