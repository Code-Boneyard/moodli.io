import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sessions-access',
  templateUrl: './access.component.html',
})
export class AccessComponent implements OnInit {
  email: string;
  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
