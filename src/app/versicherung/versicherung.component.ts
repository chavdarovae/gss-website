import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-versicherung',
	templateUrl: './versicherung.component.html',
	styleUrls: ['./versicherung.component.scss']
})
export class VersicherungComponent {
	constructor( private matDialog: MatDialog ) { }
}
