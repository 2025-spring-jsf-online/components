import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor() {}

  getPizzaTopptingsFromTheCloud() {
    // Pretend we make a web service call.

    const toppingsFromWebService = [
      {
        name: 'Olives',
        price: 2.25,
      },
      {
        name: 'Pepperoni',
        price: 1.5,
      },
      {
        name: 'Sausage',
        price: 1.75,
      },
    ];

    return toppingsFromWebService;
  }
}
