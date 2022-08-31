import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Language } from '../model/data.model';
import { CsvService } from '../shared/csv.service';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	docuList: any[] = [];
	currentLanguage: string = Language.DE;

	constructor(
		private scroller: ViewportScroller,
		private activatedRoute: ActivatedRoute,
		private csvService: CsvService,
		private translate: TranslateService
	) { 
		this.currentLanguage = this.translate.currentLang;
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
			this.loadDocuments();
        });
	}

	ngOnInit(): void {
		this.loadDocuments();
	}

	loadDocuments() {
		this.csvService.getDocumentList(this.currentLanguage.toUpperCase()).subscribe(data => {
			this.docuList = data.split('\r\n');
			this.docuList.shift();
			this.docuList = this.docuList.map((x: string )=> x.split(','))
			this.docuList .forEach( x => {
				for (let i = 0; i < x.length; i++) {
					x[i] = x[i].trim();
				}
			});
		});
	}

	ngAfterViewInit() {
		this.activatedRoute.queryParams.subscribe(params => {
            if (params['goToSection']) {
				this.scroller.scrollToAnchor(params['goToSection']);
            }
        });
	}
}
