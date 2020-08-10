
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './shared/animations'
import { ConnectionService } from './core/services/connection.service';
;

@Component({
  selector: 'moodlio-root',
  templateUrl: './app.component.html',
  animations: [routerAnimation()],
})

export class AppComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService, private http: HttpClient, public cs: ConnectionService) { }

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => { this.spinner.hide(); }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  checkConnection(): Observable<boolean> {
    return this.cs.monitor()
  }
}
