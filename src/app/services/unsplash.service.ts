import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private user = environment.unsplasUser;

  constructor(
    private http: HttpClient
  ) {

  }

  getUser() {
    const params = new HttpParams().append('client_id', environment.unsplashKey);
    return this.http.get(`https://api.unsplash.com/users/${this.user}`, {params})
  }

  getStats() {
    const params = new HttpParams().append('client_id', environment.unsplashKey);
    return this.http.get(`https://api.unsplash.com/users/${this.user}/statistics`, {params})
  }

  getPopularPhotos() {
    const params = new HttpParams().append('client_id', environment.unsplashKey).append('per_page', '30').append('stats', 'true').append('order_by', 'popular');
    return this.http.get(`https://api.unsplash.com/users/${this.user}/photos/`, {params})
  }

  getLatestPhotos() {
    const params = new HttpParams().append('client_id', environment.unsplashKey).append('per_page', '12').append('stats', 'true').append('order_by', 'latest');
    return this.http.get(`https://api.unsplash.com/users/${this.user}/photos/`, {params})
  }
}
