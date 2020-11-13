import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DetailsService } from './details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ChartsModule, ThemeService } from 'ng2-charts';

import { Router } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FirstComponentComponent } from './first-component/first-component.component';
import { ChartsModule, ThemeService } from 'ng2-charts';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    ChartsModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatDividerModule,
    AngularFontAwesomeModule,
    MatIconModule,
    MatSelectModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [DetailsService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router ) {}

}
