import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcropComponent } from './fcrop.component';

describe('FcropComponent', () => {
  let component: FcropComponent;
  let fixture: ComponentFixture<FcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});