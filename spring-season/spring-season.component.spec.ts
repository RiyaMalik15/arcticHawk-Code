import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSeasonComponent } from './spring-season.component';

describe('SpringSeasonComponent', () => {
  let component: SpringSeasonComponent;
  let fixture: ComponentFixture<SpringSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
