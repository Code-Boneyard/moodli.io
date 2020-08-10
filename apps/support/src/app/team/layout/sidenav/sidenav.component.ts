import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  onNavigate(){
    // this.router.navigateByUrl("https://www.google.com");
    window.open("https://estibase.slack.com/", "_blank");
  }
}
