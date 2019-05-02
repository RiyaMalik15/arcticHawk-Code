import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherComponent } from './hot-weather.component';

describe('HotWeatherComponent', () => {
  let component: HotWeatherComponent;
  let fixture: ComponentFixture<HotWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
