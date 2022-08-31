import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-dienstleistungen',
  templateUrl: './dienstleistungen.component.html',
  styleUrls: ['./dienstleistungen.component.scss']
})
export class DienstleistungenComponent {
  urlPrefix = isDevMode() ? '../../' : './';

  constructor() { }

}
