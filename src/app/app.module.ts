import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';
import { ClarityModule }    from "clarity-angular";


import { AppComponent }     from './app.component';
import { LoginComponent }   from './login/login.component';
import { BerandaComponent } from './beranda/beranda.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerandaComponent,
    TeacherComponent,
    StudentComponent,
    ClassComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'beranda', component: BerandaComponent },
      { path: 'login', component: LoginComponent },
      { path: 'student', component: StudentComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'class', component: ClassComponent },
      { path: 'register', component:RegisterComponent },
      { path: '', component: HomeComponent}
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent],


  
})
export class AppModule { }
     
