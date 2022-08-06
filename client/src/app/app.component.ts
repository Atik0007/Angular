import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selection!: string;
  cities = ['barcelona', 'madrid', 'valencia'];
  name!: string;
  url = 'https://fondosmil.com/fondo/26849.jpg';
  title = 'challenge1';

  constructor() {}

  ngOnInit(): void {}

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    console.log('city: ', city);
    this.selection = city;
  }

  onClick(): void {
    this.selection = '';
  }
}
