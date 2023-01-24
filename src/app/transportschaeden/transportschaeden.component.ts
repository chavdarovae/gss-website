import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-tarnsportschaeden',
	templateUrl: './transportschaeden.component.html',
	styleUrls: ['./transportschaeden.component.scss']
})
export class TarnsportschaedenComponent {
	urlPrefix = environment.urlPrefix;

	constructor(
		private router: Router,
		private sharedService: SharedService
	) { }

	goTo() {
		if (this.sharedService.isMobileDevice() && !this.sharedService.infoSeen) {
			this.router.navigate(['/standorte']);
		} else {
			this.router.navigate(['/standorte'], { fragment: 'locationMap' });
		}
	}
}
