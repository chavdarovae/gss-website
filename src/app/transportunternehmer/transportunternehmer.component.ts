import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-transportunternehmer',
	templateUrl: './transportunternehmer.component.html',
	styleUrls: ['./transportunternehmer.component.scss']
})
export class TransportunternehmerComponent implements OnInit {
	urlPrefix = environment.urlPrefix;
	baseUrl = environment.urlNeufra;

	constructor(
		private router: Router,
		private sharedService: SharedService
		) { }

	ngOnInit(): void {
	}

	goTo() {
		if(this.sharedService.isMobileDevice()) {
			if (!!sessionStorage.getItem('setLocationInfoSeen')) {
				this.router.navigate(['/standorte'], { fragment: 'locationMap' });
			} else {
				this.router.navigate(['/standorte']);
			}
		} else {
			this.router.navigate(['/standorte'], { fragment: 'locationMap' });
		}
	}
}
