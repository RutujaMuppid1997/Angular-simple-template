import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { HomeRoutingModule } from './home-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DatePipe } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [HomeComponent],
  imports: [
      CommonModule, 
      HomeRoutingModule, 
      SidebarModule,
      ButtonModule
  ],
  
})
export class HomeModule { }
