import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';


import { AppComponent }     from './app.component';
import { LoginComponent }   from './login/login.component';
import { BerandaComponent } from './beranda/beranda.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './parent/parent.component';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';

import { AuthService } from './_services/auth.service';
import { PostService } from './_services/post.service';
import { DeadlineComponent } from './deadline/deadline.component';
import { TaskComponent } from './task/task.component';

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
    PostComponent,
    DeadlineComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'beranda', component: BerandaComponent },
      { path: 'post', component: PostComponent },
      { path: 'deadline', component: DeadlineComponent },
      { path: 'task', component: TaskComponent },
      { path: 'admin', component:AdminComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'class', component: ClassComponent },
      { path: 'class', component: ClassComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component:RegisterComponent }
    ])
  ],
  providers: [ AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
     