import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-dienstleistungen',
  templateUrl: './dienstleistungen.component.html',
  styleUrls: ['./dienstleistungen.component.scss']
})
export class DienstleistungenComponent {
  urlPrefix = environment.urlPrefix;

  constructor() { }

}
