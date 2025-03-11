import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component'; // Ensure this import is present
import { RandomToppingPickerComponent } from './random-topping-picker/random-topping-picker.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; 

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TjsAdditionComponent,
    RandomToppingPickerComponent,
    TjsMultiplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
