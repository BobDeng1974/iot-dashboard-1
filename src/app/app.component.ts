import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidenavState', [
      state('open', style({
        flex:"0 1 calc(18% - 5px)"
      })),
      state('shrunk', style({
        flex:"0 1 calc(4% - 5px)",
        fontSize: "0px"
      })),
      transition('shrunk => open', animate('500ms ease-in')),
      transition('open => shrunk', animate('500ms ease-out'))
    ]),
    trigger('mainContentState', [
      state('shrunk', style({
        flex:"0 1 calc(96% - 5px)"
      })),
      state('open', style({
        flex:"0 1 calc(82% -5px)"
      })),
      transition('shrunk => open', animate('500ms ease-in')),
      transition('open => shrunk', animate('500ms ease-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'iot-dashboard';
  sidenavState: string = 'open';
  shrinkSidenav(){
    this.sidenavState = this.sidenavState === 'open' ? 'shrunk' : 'open';
  }
}
