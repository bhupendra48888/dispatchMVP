import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './component/login/login.component';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { MaterialModule } from '../../shared/material/material/material.module';
import { LayoutComponent } from './component/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    PipeModule,
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class AuthenticationModule { }
