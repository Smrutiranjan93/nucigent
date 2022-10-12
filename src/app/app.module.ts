import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SoftwaredevelopmentComponent } from './softwaredevelopment/softwaredevelopment.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { PythonComponent } from './python/python.component';
import { TeamComponent } from './team/team.component';
import { Bodycard1Component } from './bodycard1/bodycard1.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { JavaComponent } from './java/java.component';
import { AiComponent } from './ai/ai.component';
import { NetComponent } from './net/net.component';
import { AngularComponent } from './angular/angular.component';
import { MobileComponent } from './mobile/mobile.component';
import { PothiComponent } from './pothi/pothi.component';
import { JavarequireComponent } from './javarequire/javarequire.component';
import { AngularrequirementComponent } from './angularrequirement/angularrequirement.component';
import { ManagementComponent } from './management/management.component';
import { ReactComponent } from './react/react.component';
import { NetdevloperComponent } from './netdevloper/netdevloper.component';
import { FlutterComponent } from './flutter/flutter.component';
import { RouterModule } from '@angular/router';
// import { IsotopeModule } from 'ngx-isotope';

//import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SoftwaredevelopmentComponent,
    WebdevelopmentComponent,
    PythonComponent,
    TeamComponent,
    Bodycard1Component,
    PortfolioComponent,
    AboutComponent,
    JavaComponent,
    AiComponent,
    NetComponent,
    AngularComponent,
    MobileComponent,
    PothiComponent,
    JavarequireComponent,
    AngularrequirementComponent,
    ManagementComponent,
    ReactComponent,
    NetdevloperComponent,
    FlutterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatToolbarModule
    // IsotopeModule
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
