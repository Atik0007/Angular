import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selection!: string;
  cities = ['barcelona', 'madrid', 'valencia'];
  name!: string;
  url = 'https://fondosmil.com/fondo/26849.jpg';
  title = 'challenge1';

  date = new Date();
  criteria = '';

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
