import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input, isDevMode, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';
import { WindowScrollingService } from 'src/app/shared/window-scrolling.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'company';
	public get mobileSuffix(): string {
		return this.activeTab === 'karriere' && this.sharedService.isMobileDevice() ? '-mobile' : '';
	}

	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';
	baseUrl = environment.urlNeufra;

	@ViewChild('wellcomeMessage') wellcomeMessage: ElementRef;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller,
		public sharedService: SharedService,
		private windowScrollingService: WindowScrollingService
	) {}

	ngOnInit(): void {
	}

	showDetails() {
		this.windowScrollingService.disableFreeze();
		this.sharedService.showWellcomeMessage = false;
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	scrollToTop() {
		this.scroller.scrollToPosition([0, 0]);
	}

	showMap() {
		sessionStorage.setItem('setLocationInfoSeen', 'true')
	}

	isInfoSeenForCurrentSession() {
		return !!sessionStorage.getItem('setLocationInfoSeen');
	}

	disableFreeze(){
		this.windowScrollingService.disableFreeze();
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.sharedService.setNewLanugage(lang);
		sessionStorage.setItem('Nuefra-lang', lang);
		this.translate.use(lang);
	}
}
