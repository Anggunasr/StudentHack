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
import { PostsComponent } from './posts/posts.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { TaskComponent } from './task/task.component';

import { AuthService } from './_services/auth.service';
import { PostsService } from './_services/posts.service';


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
    PostsComponent,
    DeadlineComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'beranda', component: BerandaComponent },
      { path: 'post', component: PostsComponent },
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
  providers: [ AuthService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
