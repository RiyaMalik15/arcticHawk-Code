import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdWeatherComponent } from './cold-weather.component';

describe('ColdWeatherComponent', () => {
  let component: ColdWeatherComponent;
  let fixture: ComponentFixture<ColdWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
