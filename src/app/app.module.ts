import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './calender/header/header.component';
import { BodyComponent } from './calender/body/body.component';
import { FooterComponent } from './calender/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    EventsComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
