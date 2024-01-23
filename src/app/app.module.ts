// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { LanguageChartComponent } from './components/language-chart/language-chart.component';
import { AppRoutingModule } from './app-routing.module';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ActivitiesComponent,
    LanguageChartComponent,
    
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule, AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
