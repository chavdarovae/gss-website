import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'neufra-site';
	pageTitle = 'legalNotice';
	_activeTab: any = 'unternehmen';
	public get activeTab(): any {
		return this._activeTab;
	}

	public set activeTab(value: any) {
		this._activeTab = value;
		this.setPageTitle();
	}

	constructor(
		public translate: TranslateService,
		private router: Router,
		private sharedService: SharedService
	) {
		// Register translation languages
		translate.addLangs(['de', 'en', 'fr']);
		// Set default language
		translate.setDefaultLang('de');
		// Set used language
		translate.use(this.sharedService.currLang);
		// decide what to do when this event is triggered.
		router.events.subscribe(() => {
			const currUrl: string = window.location.href.split('/#/')[1];
			this.activeTab = (currUrl?.split('/').pop() !== undefined) ? currUrl.split('/').pop() : 'unternehmen';
		});
	}

	setPageTitle() {
		switch (this.activeTab) {
			case 'home': this.pageTitle = 'home'
				break;
			case 'unternehmen': this.pageTitle = 'company'
				break;
			case 'standorte': this.pageTitle = 'locations'
				break;
			case 'dienstleistungen': this.pageTitle = 'services'
				break;
			case 'karriere': this.pageTitle = 'career'
				break;
			case 'transportunternehmer': this.pageTitle = 'transportCompany'
				break;
			case 'impressum': this.pageTitle = 'legalNotice'
				break;
			case 'datenschutz': this.pageTitle = 'dataPrivacy'
				break;
		}
	}
}
