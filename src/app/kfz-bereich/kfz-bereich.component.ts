import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-kfz-bereich',
  templateUrl: './kfz-bereich.component.html',
  styleUrls: ['./kfz-bereich.component.scss']
})
export class KfzBereichComponent {
  urlPrefix = environment.urlPrefix;

  constructor() { }

}
