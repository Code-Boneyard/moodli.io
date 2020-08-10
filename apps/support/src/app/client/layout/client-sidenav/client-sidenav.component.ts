import { Component, } from '@angular/core';
import { projects } from './projects.db';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'client-sidenav',
  templateUrl: './client-sidenav.component.html',
  styleUrls: ['./client-sidenav.component.scss'],
  animations: [listAnimation]
})


export class ClientSidenavComponent {
  projects = projects;
  project = this.projects[0];
  items = [];

  toggleList() {

  }

  
}
