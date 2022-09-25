import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private infoSeen$ = new BehaviorSubject<boolean>(false);
	locationInfoSeen$ = this.infoSeen$.asObservable();

	currLang: string = (sessionStorage.getItem('Nuefra-lang') ? sessionStorage.getItem('Nuefra-lang') : 'de') as string;
	private currLangSubject = new BehaviorSubject<string>(this.currLang);
	currLang$ = this.currLangSubject.asObservable();

	constructor() {
	}

	setLocationInfoSeen(val: boolean) {
		this.infoSeen$.next(val);
	}

	isMobileDevice(): boolean {
		return window.innerWidth < 500;
	}

	setNewLanugage(lang: string) {
		this.currLangSubject.next(lang);
	}
}
