import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs/operators'

export interface RandomPhotoResponse {
  description: string;
  urls: {
    small: string,
    full: string,
    thumb: string
    regular: string
  }   
}

@Injectable({
  providedIn: 'root'
}) 
export class RandomPhotosService {
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': 'Client-ID kJSXEfgg5IzvPQsFGO0Tt7CjBBcV87SDXlTHFg9x7RI',
    'Accept-Version': 'v1'
  });

  private baseUrl: string = 'https://api.unsplash.com/';

  constructor(private http: HttpClient) { 
  }

  getRandomPhoto() {
    console.log('Get Random Photo service call');
    return this.http.get<RandomPhotoResponse>(
      `${this.baseUrl}/photos/random`, 
      {headers: this.httpHeaders}
    ).pipe(
      pluck('urls','small')
    );
  }
}
