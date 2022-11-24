import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';
import { WindowScrollingService } from 'src/app/shared/window-scrolling.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'company';
	public get mobileSuffix(): string {
		return this.sharedService.isMobileDevice() ? '-mobile' : '';
	}

	imgPrefix = environment.urlPrefixCore + 'assets/img/';
	baseUrl = environment.urlNeufra;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller,
		public sharedService: SharedService,
		private windowScrollingService: WindowScrollingService
	) {}

	showDetails() {
		this.sharedService.showWellcomeMessage = false;
		this.disableFreeze();
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	disableFreeze() {
		if(this.sharedService.isMobileDevice()) {
			this.windowScrollingService.disableFreeze();
		}
	}

	hideLocationInfo() {
		sessionStorage.setItem('Neufra-info-seen', 'true');
		this.disableFreeze();
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.sharedService.setNewLanugage(lang);
		sessionStorage.setItem('Neufra-lang', lang);
		this.translate.use(lang);
	}
}
