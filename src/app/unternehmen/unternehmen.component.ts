import { DOCUMENT } from '@angular/common';
import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Language } from '../model/data.model';
import { CsvService } from '../shared/csv.service';
import { environment } from './../../environments/environment.prod';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit, AfterViewChecked {
	urlPrefix = environment.urlPrefix;
	docuList: any[] = [];
	currentLanguage: string = Language.DE;
	anchor: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private csvService: CsvService,
		private translate: TranslateService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.currentLanguage = this.translate.currentLang;
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang;
			this.loadDocuments();
        });
	}

	ngOnInit(): void {
		this.loadDocuments();
		this.activatedRoute.fragment.subscribe(fragment => {
			this.anchor = fragment ? fragment : '';
		});
	}

	ngAfterViewChecked(): void {
		if(this.anchor) {
			this.document.querySelector('#' + this.anchor)?.scrollIntoView({behavior: 'smooth'});
		}
	}

	loadDocuments() {
		this.csvService.getDocumentList(this.currentLanguage.toUpperCase()).subscribe(data => {
			this.docuList = data.split('\n');
			this.docuList.shift();
			this.docuList = this.docuList.map((x: string )=> x.split(','))
			this.docuList .forEach( x => {
				for (let i = 0; i < x.length; i++) {
					x[i] = x[i].trim();
				}
			});
		});
	}
}
