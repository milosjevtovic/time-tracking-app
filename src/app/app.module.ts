import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LocalService } from './_services/local.service';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';
import { SummaryComponent } from './summary/summary.component'; 
import { NavigationComponent } from './navigation/navigation.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatTableModule } from '@angular/material/table'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InformationComponent,
    SummaryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
