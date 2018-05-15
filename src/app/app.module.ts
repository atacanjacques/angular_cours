import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HttpClientModule } from '@angular/common/http';
import { Page2Component } from './page2/page2.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }