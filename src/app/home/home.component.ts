import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Cuoi';
  public age = 15;
  public fruits = ['Apple', 'Orange'];
  public fruitItems = [
    { name: 'Apple', price: 12, sale: true },
    { name: 'Orange', price: 15, sale: false },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('Fruit = ', this.fruits);
  }

  public resetName(): void {
    this.name = '';
    console.log('resetName');
  }
}
