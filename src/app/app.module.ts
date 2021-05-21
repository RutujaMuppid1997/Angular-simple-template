import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderService } from '../app/common/loader/service/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './common/interceptor/loader.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { ApiHeaderInterceptorApiHeaderInterceptor } from './common/interceptor/api-header.interceptor';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    ChartModule,
    CardModule,
    DropdownModule,
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    PanelModule,
    ToastModule,
    CheckboxModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptorApiHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AppModule
    };
}
}
