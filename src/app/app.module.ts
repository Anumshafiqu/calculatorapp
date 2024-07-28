import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { TodoComponent } from './todo/todo.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
