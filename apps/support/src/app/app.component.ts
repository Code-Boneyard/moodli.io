
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './shared/animations'
import { ConnectionService } from './core/services/connection.service';
;

@Component({
  selector: 'estibase-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService, private http: HttpClient, public cs: ConnectionService) { }


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
