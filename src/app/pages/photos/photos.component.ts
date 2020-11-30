import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public user: any;
  public stats: any;
  public photos: any[] = [];
  public rphotos: any[] = [];
  public loading = true;

  constructor(
    private unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.unsplashService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );

    this.unsplashService.getStats().subscribe(
      stats => {
        this.stats = stats;
      }
    );

    this.unsplashService.getPopularPhotos().subscribe(
      (photos: any[]) => {
        this.photos = photos;
      }
    );

    this.unsplashService.getLatestPhotos().subscribe(
      (rphotos: any[]) => {
        this.rphotos = rphotos;
        this.loading = false;
      }
    );
  }

}
