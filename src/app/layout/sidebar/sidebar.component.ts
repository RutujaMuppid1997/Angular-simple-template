import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  visibleSidebar1 :boolean = false;
  cities:any=[];
  selectedCity: any;
  constructor() {
    this.cities = [
      {name: 'Employees', code: 'e'},
      {name: 'Customers', code: 'c'},
      {name: 'Tax', code: 't'},
  ];
   }
 
  ngOnInit(): void {
  }

  visibleSidebar(){
    this.visibleSidebar1 = true;
  }

}
