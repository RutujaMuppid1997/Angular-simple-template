import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  visibleSidebar1: boolean = false;
  cities: any = [];
  selectedList: any;
  constructor( private router: Router) {
    this.cities = [
      { name: 'Home', code: 0 },
      { name: 'Employees', code: 1 },
      { name: 'Customers', code: 2 },
      { name: 'Tax', code: 3 },
    ];
  }

  ngOnInit(): void {
  }

  visibleSidebar() {
    this.visibleSidebar1 = true;
  }
  navToComponent() {
    let index = this.selectedList.code;

    switch (index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/']);
        break;
      case 2:
        this.router.navigate(['/customer']);
        break;
      case 3:
        this.router.navigate(['/']);
        break;
      default:
        console.log("No such day exists!");
        break;
    }

  }

}
