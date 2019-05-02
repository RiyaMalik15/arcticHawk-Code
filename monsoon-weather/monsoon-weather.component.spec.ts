import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsoonWeatherComponent } from './monsoon-weather.component';

describe('MonsoonWeatherComponent', () => {
  let component: MonsoonWeatherComponent;
  let fixture: ComponentFixture<MonsoonWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsoonWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsoonWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
