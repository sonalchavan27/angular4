import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
public imageSources: string[] = [
    '/assets/images/festival.jpg',
    '/assets/images/mi.jpg',
    '/assets/images/sale.jpg'
    
    ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: false,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
  ngOnInit() {
  }

}
