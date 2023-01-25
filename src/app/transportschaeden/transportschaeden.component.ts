import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-tarnsportschaeden',
	templateUrl: './transportschaeden.component.html',
	styleUrls: ['./transportschaeden.component.scss']
})
export class TarnsportschaedenComponent {
	urlPrefix = environment.urlPrefix;
}
