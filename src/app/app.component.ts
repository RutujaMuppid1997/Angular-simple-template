import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var $: any;
import { LoaderService } from './common/loader/service/loader.service';
import { HttpGenericService } from "../app/services/http-services/http-genric.service";
import { first } from 'rxjs/operators';
declare var require: any
const swal = require("sweetalert");
import  {API} from "../app/const/api"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isToken:boolean = false;
  url: any;
  myWindow: any;
  constructor(private http: HttpClient, public loaderService: LoaderService,
    private httpGenericRouteSerivce: HttpGenericService,
  ) {
    this.httpGenericRouteSerivce
    .fetchAll( API.nodeEndPoint +'checkCallBack')
    .pipe(first())
    .subscribe((data: any) => {
      if(!data)
      {
        this.isToken = false;
      }else{
        this.isToken = true;
      }
    });
    
  }

  ngOnInit() {

  }

  signIn(){
    this.initializeData();
  }

  initializeData(){
    this.httpGenericRouteSerivce
      .fetchAll(API.nodeEndPoint +'authUri')
      .pipe(first())
      .subscribe((data: any) => {
        console.log(data)
        this.url = data.url;
        this.myWindow =window.open(data.url,'_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        this.loaderService.show();
        let interval =setInterval(() => {
          this.loaderService.show();
          this.httpGenericRouteSerivce
            .fetchAll(API.nodeEndPoint +'checkCallBack')
            .pipe(first()) 
            .subscribe((data: any) => {
              this.loaderService.show();
              if (data) {
                this.httpGenericRouteSerivce
                  .fetchAll(API.nodeEndPoint +'retrieveToken')
                  .pipe(first())
                  .subscribe((data: any) => {
                     this.isToken = true;
                     this.myWindow.close();
                     localStorage.setItem('auth',data.tokenDetails.token.access_token);
                     this.loaderService.hide();
                  });
                  clearInterval(interval);
              }
            });
        }, 10000);
      });

  }
}

