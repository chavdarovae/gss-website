import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, isDevMode, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';
import { WindowScrollingService } from 'src/app/shared/window-scrolling.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'company';
	public get mobileSuffix(): string {
		return this.activeTab === 'karriere' && this.sharedService.isMobileDevice() ? '-mobile' : '';
	}

	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';
	baseUrl = environment.urlNeufra;
	showWellcomeMessage = true;
	
	@ViewChild('wellcomeMessage') wellcomeMessage: ElementRef;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller,
		public sharedService: SharedService,
		private renderer: Renderer2,
		private windowScrollingService: WindowScrollingService
	) {}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		// this.renderer.listen('window', 'touchstart', (e: Event) => {
		// 	if (this.showWellcomeMessage && this.wellcomeMessage.nativeElement.contains(e.target)) {
		// 		this.showWellcomeMessage = false;
		// 		this.showDetails();
		// 	}
		// });
	}

	showDetails() {
		this.windowScrollingService.disableFreeze();
		this.showWellcomeMessage = false;
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	scrollToTop() {
		this.scroller.scrollToPosition([0, 0]);
	}

	showMap() {
		sessionStorage.setItem('setLocationInfoSeen', 'true')
		// this.windowScrollingService.disableFreeze();
	}

	isInfoSeenForCurrentSession() {
		return !!sessionStorage.getItem('setLocationInfoSeen');
	}

	disableFreeze(){
		this.windowScrollingService.disableFreeze();
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}
