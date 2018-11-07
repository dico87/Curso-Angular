import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyComponent } from './my-component/mycomponent.component';
import { MycardComponent } from './mycard/mycard.component';
import { FormsModule } from '@angular/forms';
import { TwoWayComponent } from './two-way/two-way.component';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [AppComponent, MyComponent, MycardComponent, TwoWayComponent, ExerciseComponent],
  imports: [BrowserModule, MatCardModule, MatButtonModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
