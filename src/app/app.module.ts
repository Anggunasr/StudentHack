import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }     from './app.component';
import { LoginComponent }   from './login/login.component';
import { BerandaComponent } from './beranda/beranda.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';
import { AdminComponent } from './admin/admin.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './_services/auth.service';
import { PostsService } from './_services/posts.service';
import { ProfilComponent } from './profil/profil.component';
import { ValidateService } from './_services/validate.service'
import { DataService } from './_services/data.service';
import { ToastrService } from 'toastr-ng2';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './_guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerandaComponent,
    TeacherComponent,
    StudentComponent,
    ClassComponent,
    RegisterComponent,
    ParentComponent,
    AdminComponent,
    TaskComponent,
    ProfilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    FlashMessagesModule,
    RouterModule.forRoot([
      { path: 'beranda', component: BerandaComponent, canActive: [AuthGuard] },
      { path: 'task', component: TaskComponent },
      { path: 'admin', component:AdminComponent, canActive: [AuthGuard] },
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'class', component: ClassComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component:RegisterComponent },
      { path: 'profil', component:ProfilComponent, canActive: [AuthGuard] },
      { path: '', component:HomeComponent},
      { path: 'home', component:HomeComponent}
    ])
  ],
  providers: [ AuthService, PostsService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
