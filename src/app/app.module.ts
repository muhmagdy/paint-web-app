import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    SketchComponent,
    CircleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
