import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-versicherung',
	templateUrl: './versicherung.component.html',
	styleUrls: ['./versicherung.component.scss']
})
export class VersicherungComponent {
	currCompetence = this.sharedService.isPortraitTabletDevice() ? null : 'li1';

	constructor (private sharedService: SharedService) {}

	toggleCurrCompetence(item: string) {
		if (this.sharedService.isPortraitTabletDevice()) {
			this.currCompetence = item === this.currCompetence ? null : item;
		} else {
			this.currCompetence = item;
		}
	}
}
