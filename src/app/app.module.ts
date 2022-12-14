import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { AllStudentsComponent } from './components/all-students/all-students.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CreateStudentsComponent,
    AllStudentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
