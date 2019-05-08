import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get<{message: string, input: any}>('http://localhost:3000/data/getArtists');
  }
}
