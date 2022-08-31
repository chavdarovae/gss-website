import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Language, PositionInfo } from '../model/data.model';
import { CsvService } from '../shared/csv.service';

@Component({
	selector: 'app-karriere',
	templateUrl: './karriere.component.html',
	styleUrls: ['./karriere.component.scss']
})
export class KarriereComponent implements OnInit {
	currPosition = 0;
	expanded = false;
	positions: any[] = [];
	asc = true;
	currentLanguage: string = Language.DE;

	constructor(
		private csvService: CsvService,
		private translate: TranslateService
	) { 
		this.currentLanguage = this.translate.currentLang;
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = event.lang
			this.loadPositions();
        });
	}

	ngOnInit(): void {
		this.loadPositions();
	}

	loadPositions() {
		this.csvService.getPositionsList(this.currentLanguage.toUpperCase()).subscribe(data => {
			const stringList = data.split('new position,');
			stringList.shift();
			this.positions = [];
			stringList.forEach(x => {
				this.positions.push(this.getPosition(x))
			})
		});
	}

	getPosition(positionString: string) {
		const position = positionString.split('new line,').filter(x => x !== '');
		const posObj: any = new PositionInfo();
		posObj.tasks = [];
		posObj.requirements = [];

		position.forEach(x => {
			const position = x.split(',');
			const label = position[0];
			position.shift();
			const text = position.join(',');
			const simpleLabels = ['title', 'location', 'description', 'offer', 'other', 'partnerName', 'partnerMobile', 'partnerCity', 'partnerStreet', 'partnerPhone'];
			const complexLabels = ['tasks', 'requirements'];
			if (label === 'partnerName') {
				posObj.partnerEmail = this.getEmail(text);
			}
			if (label === 'partnerPhone') {
				posObj.partnerPhone = this.formatNumber(text);
			}
			if (complexLabels.includes(label)) {
				posObj[`${label}`].push(text);
			} else if (simpleLabels.includes(label)) {
				posObj[`${label}`] = text;
			}
		})
		return posObj;
	}

	togglePosition(index: number) {
		this.currPosition = index;
		this.expanded = !this.expanded;
	}

	sortPositions() {
		this.asc = !this.asc
		this.positions.sort((a, b) => this.asc ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location));
	}

	getEmail(input: string) {
		const name = input.trim().replace('Hr. ', '')
			.replace('Fr. ', '')
			.toLowerCase()
			.replace('ö', 'oe')
			.replace('ü', 'ue')
			.replace('ä', 'ae')
			.replace(' ', '.');
		return (name + '@neufra.eu');
	}

	formatNumber(numberStr: string) {
		const number = numberStr.split(' ').join('').split('-').join('');
		return number.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1 $2 $3 - $4 $5 - ");
	}
}
