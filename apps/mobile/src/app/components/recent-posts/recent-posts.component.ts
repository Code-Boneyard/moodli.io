import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
