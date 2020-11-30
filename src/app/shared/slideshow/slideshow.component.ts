import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() photos: any[];

  mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      centeredSlides: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

  ngOnInit(): void {
    console.log(this.photos);

  }

  onSlideNext() {
    this.mySwiper.slideNext();
  }

  onSlidePrevius() {
    this.mySwiper.slidePrev();
  }

}
