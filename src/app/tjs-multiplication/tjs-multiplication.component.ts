import { Component } from '@angular/core';

@Component({
  selector: 'app-tjs-multiplication',
  standalone: false,
  templateUrl: './tjs-multiplication.component.html',
  styleUrl: './tjs-multiplication.component.css'
})

export class TjsMultiplicationComponent {

  numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}
