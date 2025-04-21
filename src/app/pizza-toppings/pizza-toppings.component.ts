import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingsDisplay{
  name: string;
  price: number;
  checked: boolean;
}
@Component({
  selector: 'app-pizza-toppings',
  standalone: false,
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI... Dependency injection...
  constructor (
    private pizzaSvc: PizzaService
  ) {}

  availablePizzaToppings: PizzaToppingsDisplay[] = [];

  ngOnInit(): void {
    
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);
  }

  totalPrice = 0;

  calculateTotal = () => {
    this.totalPrice = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
      (acc, x) => acc + x.price
      , 0
      )
    ; 
  }
}
