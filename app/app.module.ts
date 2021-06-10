import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlatpickrModule} from 'angularx-flatpickr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot({
      enable: [
        {from: '1900-01-01', to: '2500-12-31'}
      ]
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
