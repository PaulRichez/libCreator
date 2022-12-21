import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTerminalComponent } from './ngx-terminal.component';

describe('NgxTerminalComponent', () => {
  let component: NgxTerminalComponent;
  let fixture: ComponentFixture<NgxTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
