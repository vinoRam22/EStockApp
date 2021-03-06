import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { StockRegisterComponent } from './stock-register/stock-register.component';
import { CanActivateRouteGuard } from './Services/can-activate-route.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegisterComponent,
    BasicSearchComponent,
    CompanyListComponent,
    AdvanceSearchComponent,
    MenubarComponent,
    LandingComponent,
    LoginComponent,
    StockRegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
