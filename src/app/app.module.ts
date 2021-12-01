import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HighlightPipe } from './highlight.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';






@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule, BrowserAnimationsModule,HttpClientModule, NgxPaginationModule, MatTabsModule,ChartsModule ],
  declarations: [ AppComponent, HighlightPipe, BarchartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
