import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WheatComponent } from './wheat/wheat.component';
import { RiceComponent } from './rice/rice.component';
import { PulsesComponent } from './pulses/pulses.component';
import { SugarcaneComponent } from './sugarcane/sugarcane.component';
import { JuteComponent } from './jute/jute.component';
import { MaizeComponent } from './maize/maize.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { AboutComponent } from './about/about.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ServiceComponent } from './service/service.component';
import { FcropComponent } from './fcrop/fcrop.component';
import { FCropServiceService } from './fcrop-service.service';
import { HttpModule } from '@angular/http';
import { ContactComponent } from './contact/contact.component';
import { FarmerComponent } from './farmer/farmer.component';
import { SpringSeasonComponent } from './spring-season/spring-season.component';
import{ ColdWeatherComponent} from './cold-weather/cold-weather.component';
import { HotWeatherComponent} from './hot-weather/hot-weather.component';
import {MonsoonWeatherComponent} from './monsoon-weather/monsoon-weather.component';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { ProfileComponent } from './profile/profile.component';
import { PredictionComponent } from './prediction/prediction.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SearchComponent } from './search/search.component';
import { HttpClient } from 'selenium-webdriver/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'login', component : LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'seasons', component:SeasonsComponent},
  {path:'farmer', component:FarmerComponent},
  {path:'agriculture', component:AgricultureComponent},
  {path:'wheat', component:WheatComponent},
  {path:'rice', component:RiceComponent},
  {path:'pulses', component:PulsesComponent},
  {path:'maize', component:MaizeComponent},
  {path:'jute', component:JuteComponent},
  {path:'sugarcane', component:SugarcaneComponent},
  {path:'programmes', component:ProgrammesComponent},
  {path:'about', component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'search',component:SearchComponent},
  
  {
    path:'service/:id', 
    component:ServiceComponent,
    children:[
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'custhome',
        component: HomeComponent
      },
      {
        path: 'prediction',
        component: PredictionComponent
      },
      {
        path: 'custwcrop',
        component: WheatComponent
      },
      {
        path: 'custrcrop',
        component: RiceComponent
      },
      {
        path: 'custscrop',
        component: SugarcaneComponent
      },
      {
        path: 'custjcrop',
        component: JuteComponent
      },
      {
        path: 'custmcrop',
        component:MaizeComponent
      },
      {
        path: 'custps',
        component: ProgrammesComponent
      },
      {
        path: 'custcontact',
        component: ContactComponent
      },
      {
        path: 'custpcrop',
        component: PulsesComponent
      },
      {
        path:'update',
        component: UpdateCustomerComponent
      }
    ]
  },
  {path:'fcrop', component:FcropComponent},
  {path:'contact', component:ContactComponent},
  {path:'cold_weather', component:ColdWeatherComponent},
  {path:'hot_weather', component:HotWeatherComponent},
  {path:'monsoon_weather', component:MonsoonWeatherComponent},
  {path:'spring_season', component:SpringSeasonComponent},

  {path: '', component : HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    WheatComponent,
    RiceComponent,
    PulsesComponent,
    SugarcaneComponent,
    JuteComponent,
    MaizeComponent,
    ProgrammesComponent,
    AboutComponent,
    AgricultureComponent,
    SeasonsComponent,
    ServiceComponent,
    FcropComponent,
    ContactComponent,
    FarmerComponent,
    HotWeatherComponent,
    SpringSeasonComponent,
    ColdWeatherComponent,
    MonsoonWeatherComponent,
    LoginnavComponent,
    ProfileComponent,
    PredictionComponent,
    UpdateCustomerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClient    
  ],
  providers: [FCropServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
