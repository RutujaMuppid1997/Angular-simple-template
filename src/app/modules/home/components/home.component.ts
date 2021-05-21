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

  title = 'QuickBookBank';
  selectedItem: any;
  toolbarWallet!: string

  constructor(private http: HttpClient, public loaderService: LoaderService , public route:Router) {

  }
  public options: any = {
    chart: {
      type: 'area',
      animation: {
        duration: 1000
      },
      height: 22,
      spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      margin: [0, 0, 0, 0],
      backgroundColor: false
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    title: false,
    subtitle: false,
    legend: false,
    xAxis: {
      visible: false,
      minPadding: 0,
      maxPadding: 0
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      series: {
        borderColor: '#303030',
        fillColor: {
          linearGradient: [0, 0, 0, 18],
          stops: [
            [0, '#43F95A'],
            [1, '#121212']
          ]
        }
      },
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: false,
      marker: {
        enabled: false
      },
      color: '#43F95A',
      data: [0, 1, 2, 2, 1, 2, 1, 3, 2, 2, 1, 2, 3]
    }]
  }
  public option2: any = {
    chart: {
      type: 'area',
      height: 22,
      spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      margin: [0, 0, 0, 0],
      backgroundColor: false
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    title: false,
    subtitle: false,
    legend: false,
    xAxis: {
      visible: false,
      minPadding: 0,
      maxPadding: 0
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      series: {
        borderColor: '#303030',
        fillColor: {
          linearGradient: [0, 0, 0, 18],
          stops: [
            [0, '#43F95A'],
            [1, '#121212']
          ]
        }
      },
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: false,
      marker: {
        enabled: false
      },
      color: '#43F95A',
      data: [0, 1, 2, 2, 1, 2, 1, 3, 2, 2, 1, 2, 3]
    }]
  }
  public option3: any = {
    chart: {
      type: 'area',
      height: 22,
      spacingTop: 0,
      spacingRight: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      margin: [0, 0, 0, 0],
      backgroundColor: false
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    title: false,
    subtitle: false,
    legend: false,
    xAxis: {
      visible: false,
      minPadding: 0,
      maxPadding: 0
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      series: {
        borderColor: '#303030',
        fillColor: {
          linearGradient: [0, 0, 0, 18],
          stops: [
            [0, '#43F95A'],
            [1, '#121212']
          ]
        }
      },
      area: {
        fillOpacity: 0.5
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: false,
      marker: {
        enabled: false
      },
      color: '#43F95A',
      data: [0, 1, 2, 2, 1, 2, 1, 3, 2, 2, 1, 2, 3]
    }]
  }

  ngOnInit() {
    setTimeout(function () { $(".loader-warp").hide(); }, 1000);
    setTimeout(function () { $(".card-loader").hide(); }, 1000);
    
    Highcharts.chart('container', this.options);
    Highcharts.chart('container2', this.option2);
    Highcharts.chart('container3', this.option3);

  }

  

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
      })
  }

  // liquidity functions:
  redirectToParticipate(){
    $('.close-modal').click(function () {
      $('.modal').css("display", "none");
    });
    this.route.navigate(['/liquidity/participate']);

  }


} 

