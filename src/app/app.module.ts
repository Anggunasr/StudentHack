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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerandaComponent,
    TeacherComponent,
    StudentComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'beranda',
        component: BerandaComponent
      },
      { path: 'login',
        component: LoginComponent
      },
      { path: 'student',
        component: StudentComponent
      },
      { path: 'teacher',
        component: TeacherComponent
      },
      { path: 'class',
        component: ClassComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
