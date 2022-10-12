import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AiComponent } from './ai/ai.component';
import { AngularComponent } from './angular/angular.component';
import { AngularrequirementComponent } from './angularrequirement/angularrequirement.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { CservicesComponent } from './cservices/cservices.component';
import { FlutterComponent } from './flutter/flutter.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { JavaComponent } from './java/java.component';
import { JavarequireComponent } from './javarequire/javarequire.component';
import { ManagementComponent } from './management/management.component';
import { MobileComponent } from './mobile/mobile.component';
import { NetComponent } from './net/net.component';
import { NetdevloperComponent } from './netdevloper/netdevloper.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PothiComponent } from './pothi/pothi.component';
import { PythonComponent } from './python/python.component';
import { ReactComponent } from './react/react.component';
import { RequirementComponent } from './requirement/requirement.component';
import { SoftwaredevelopmentComponent } from './softwaredevelopment/softwaredevelopment.component';
import { SystemintegrationComponent } from './systemintegration/systemintegration.component';
import { TeamComponent } from './team/team.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';

const routes: Routes = [

  {
    path:'',
    component:BodyComponent
  },
  {
    path:'software',
    component:SoftwaredevelopmentComponent
  },
  {
    path:'webdevelopment',
    component:WebdevelopmentComponent
  },
  {
    path:'systemintegration',
    component:SystemintegrationComponent
  },
  {
    path:'infrastructure',
    component:InfrastructureComponent
  },
  {
    path:'requirement',
    component:RequirementComponent
  },
  {
    path:'cservices',
    component:CservicesComponent,
    children:[
      {
        path:'pythons',
        component: PythonComponent
      },
      {
        path:'java',
        component:JavaComponent
      },
    ]
  },
  {
    path:'contact',
    component:ContactComponent
  },
 
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'project',
    component:PortfolioComponent
  },
  {
    path:'about',
    component:AboutComponent

  },
 
  {
    path:'ai',
    component:AiComponent
  },
  {
    path:'.net',
    component:NetComponent
  },
  {
    path:'angular',
    component:AngularComponent
  },
  {
    path:'mobile',
    component:MobileComponent
  },
  {
    path:'pothi',
    component:PothiComponent
  },
  {
    path:'javarequirement',
    component:JavarequireComponent
  },
  {
    path:'Angularrequirement',
    component:AngularrequirementComponent
  },
  {
    path:'management',
    component:ManagementComponent
  },
  {
    path:'react',
    component:ReactComponent
  },
  {
    path:'net',
    component:NetdevloperComponent
  },
  {
    path:'flutter',
    component:FlutterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
