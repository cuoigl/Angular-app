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

  public citis = [
    { city: 'Choose a city', districts: ['Districts'] },
    { city: 'Gia Lai', districts: ['Pleiku', 'ChưProng'] },
    { city: 'Đà Nẵng', districts: ['Cẩm Lệ', 'Ngũ Hành Sơn'] },
  ];

  public districts : string[] = ['Districts'];

  constructor() {}

  ngOnInit(): void {
  }

  public resetName(): void {
    this.name = '';
    console.log('resetName');
  }

  public changeCity(event: any): void {
    const city = event.target.value;  
    if (!city) {
      return;
    }

    // const search = this.citis.filter((data) => data.city === city);
    // if ( search && search.length > 0) { 
    //   this.districts = search[0].districts;
    // }

    this.districts = this.citis.find((data) => data.city === city)?.districts || [];
  }



}
