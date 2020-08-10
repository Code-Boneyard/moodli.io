import { Component, ViewChild } from '@angular/core';
import { Slide } from "./../components/carousel/carousel.model";
import { AnimationType } from "./../../shared/vendors/carousel.animations";
import { CarouselComponent } from "./../components/carousel/carousel.component";

@Component({
  selector: 'sessions-footer',
  templateUrl: './sessions-layout.component.html',
})

export class SessionsLayoutComponent {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Fade;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
  slides: Slide[] = [

    {
      headline: "Miouw",
      src:
        "./../../../assets/images/sessions/2.jpeg"
    },
    {
      headline: "In The Wilderness",
      src:
        "./../../../assets/images/sessions/3.jpeg"
    },
    {
      headline: "For Your Current Mood",
      src:
        "./../../../assets/images/sessions/1.jpeg"
    },
  ];

  constructor() { }

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
