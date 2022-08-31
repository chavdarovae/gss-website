import { ViewportScroller } from '@angular/common';
import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-transportunternehmer',
	templateUrl: './transportunternehmer.component.html',
	styleUrls: ['./transportunternehmer.component.scss']
})
export class TransportunternehmerComponent implements OnInit {
	urlPrefix = isDevMode() ? '../../' : './';
	baseUrl = environment.urlNeufra;

	constructor(
		private router: Router,
		private scroller: ViewportScroller,
		private sharedService: SharedService
		) { }

	ngOnInit(): void {
	}

	goTo() {
		if(this.sharedService.isMobileDevice()) {
			if (!!sessionStorage.getItem('setLocationInfoSeen')) {
				window.location.href = `${this.baseUrl}standorte#locationMap`;
			} else {
				// this.scroller.scrollToPosition([0,0]);
				// this.router.navigate(['/standorte']);
				window.location.href = `${this.baseUrl}standorte`;
			}
		} else {
			window.location.href = `${this.baseUrl}standorte#locationMap`;
		}
	}
}
