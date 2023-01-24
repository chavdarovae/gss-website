import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
declare let locations: any;
declare let inputData: any;
declare let inputCode: any;
@Component({
	selector: 'app-standorte',
	templateUrl: './standorte.component.html',
	styleUrls: ['./standorte.component.scss']
})
export class StandorteComponent implements OnInit {
	urlPrefix = environment.urlPrefix;

	constructor() {}

	ngOnInit(): void {
	}
}
