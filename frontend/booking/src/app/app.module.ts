import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttractionComponent } from './components/attraction/attraction.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AttractionsService} from './services/attractions.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AttractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AttractionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
