import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
	selector: 'app-versicherung',
	templateUrl: './versicherung.component.html',
	styleUrls: ['./versicherung.component.scss']
})
export class VersicherungComponent {
	constructor( private matDialog: MatDialog ) { }
}
