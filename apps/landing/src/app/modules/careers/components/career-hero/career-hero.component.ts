import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'estibase-career-hero',
  templateUrl: './career-hero.component.html',
  styleUrls: ['./career-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
