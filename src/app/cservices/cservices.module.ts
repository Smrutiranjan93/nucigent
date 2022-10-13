import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CservicesComponent } from './cservices.component';
import { PythonComponent } from './python/python.component';
import { JavarequireComponent } from './javarequire/javarequire.component';
import { AngularrequirementComponent } from './angularrequirement/angularrequirement.component';
import { ReactComponent } from './react/react.component';
import { NetdevloperComponent } from './netdevloper/netdevloper.component';
import { FlutterComponent } from './flutter/flutter.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pythons',
    component: PythonComponent,
  },
  {
    path: 'javarequirement',
    component: JavarequireComponent,
  },
  {
    path: 'Angularrequirement',
    component: AngularrequirementComponent,
  },
  {
    path: 'react',
    component: ReactComponent,
  },
  {
    path: 'net',
    component: NetdevloperComponent,
  },
  {
    path: 'flutter',
    component: FlutterComponent,
  },
];

@NgModule({
  declarations: [CservicesComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CservicesModule {}
