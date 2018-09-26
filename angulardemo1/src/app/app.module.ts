import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './coponents/father/father.component';
import { Children1Component } from './coponents/children1/children1.component';
import { Children2Component } from './coponents/children2/children2.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    Children1Component,
    Children2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
