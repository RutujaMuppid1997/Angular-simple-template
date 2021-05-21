import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toolbarWallet!: string
  time!: string;
  today: number = Date.now();

  constructor( public route:Router) { }

  ngOnInit(): void {
  
   }
  

  redirectToReward(){
  }

}
