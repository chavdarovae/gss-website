import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
import { WindowScrollingService } from '../shared/window-scrolling.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	urlPrefix = environment.urlPrefix;
	baseUrl = environment.urlNeufra;

	constructor(
		private windowScrollingService: WindowScrollingService,
		private sharedService: SharedService,
	) {}

	ngOnInit(): void {
		if(this.sharedService.isMobileDevice() && this.sharedService.showWellcomeMessage) {
			this.windowScrollingService.enableFreeze();
		}
	}
}
