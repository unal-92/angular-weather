import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: any) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?appid=fe191375e2263a6fb906934da94cd023&q=' + location
    );
  }
}
// api = fe191375e2263a6fb906934da94cd023; 
