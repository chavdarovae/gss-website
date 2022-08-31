import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Language } from '../model/data.model';

@Injectable({
	providedIn: 'root'
})
export class CsvService {
	urlPrefix = isDevMode() ? '../../' : './';

	constructor(private http: HttpClient) { }

	getLocationDetails(abr: string) {
		const inlandOrAbroad = abr.length === 3 ? 'DE' : 'Toechter';
		return this.http.get(`${this.urlPrefix}assets/files/locations/Personal ${inlandOrAbroad}.xlsx - ${abr}.csv`, { responseType: 'text' });
	}

	getPositionsList(language: Language | string) {
		return this.http.get(`${this.urlPrefix}assets/files/carreer/Career.xlsx - ${language}.csv`, { responseType: 'text' });
	}

	getLocationList() {
		return this.http.get(`${this.urlPrefix}assets/files/locations/Locations.xlsx - coordinates.csv`, { responseType: 'text' });
	}

	getDocumentList(language: Language | string) {
		return this.http.get(`${this.urlPrefix}assets/files/documents/Document-List.xlsx - ${language}.csv`, { responseType: 'text' });
	}
}
