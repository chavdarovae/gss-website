import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

	currLang: string = (sessionStorage.getItem('Neufra-lang') ? sessionStorage.getItem('Neufra-lang') : 'de') as string;
	private currLangSubject = new BehaviorSubject<string>(this.currLang);
	currLang$ = this.currLangSubject.asObservable();

	// flags
	showWellcomeMessage = true;
	get infoSeen() {
		return !!sessionStorage.getItem('Neufra-info-seen');
	}

	constructor() {
	}

	isMobileDevice(): boolean {
		return window.innerWidth < 500;
	}

	setNewLanugage(lang: string) {
		this.currLangSubject.next(lang);
	}
}
