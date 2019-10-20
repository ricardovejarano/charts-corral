import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NgxLineChartModule } from 'ngx-line-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NgxLineChartModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
