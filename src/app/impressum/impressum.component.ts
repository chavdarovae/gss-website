import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  urlPrefix = isDevMode() ? '../../../' : './';

  constructor() { }

}
