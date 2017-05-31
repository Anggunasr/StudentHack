import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaComponent } from './beranda.component';

describe('BerandaComponent', () => {
  let component: BerandaComponent;
  let fixture: ComponentFixture<BerandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
