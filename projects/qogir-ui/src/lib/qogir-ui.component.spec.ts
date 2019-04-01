import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QogirUiComponent } from './qogir-ui.component';

describe('QogirUiComponent', () => {
  let component: QogirUiComponent;
  let fixture: ComponentFixture<QogirUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QogirUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QogirUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
