import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-systems',
  templateUrl: './systems.component.html',
})
export class SystemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNewTab(url) {
    window.open(url, '_blank');
  }

}
