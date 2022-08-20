import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface City {
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly API =
    'https://crudcrud.com/api/4591153898e64ff59afaa9ad663e9daf/cities';

  constructor(private readonly http: HttpClient) {}

  addNewCity(city: string): Observable<City> {
    const body = { name: city };
    return this.http.post<City>(this.API, body);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API);
  }

  updateCity(city: City): Observable<void> {
    const body = { name: city.name };
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }

  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
