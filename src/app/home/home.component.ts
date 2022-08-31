import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
import { WindowScrollingService } from '../shared/window-scrolling.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	baseUrl = environment.urlNeufra;

	constructor(
		private scroller: ViewportScroller,
		private windowScrollingService: WindowScrollingService,
		private sharedService: SharedService
	) {}

	ngOnInit(): void {
		if(this.sharedService.isMobileDevice()) {
			this.windowScrollingService.enableFreeze();
		}
	}

	ngAfterViewInit(): void {
		this.scroller.scrollToPosition([0,0])
	}
}
