import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { InternshipComponent } from './internship/internship.component';

@Component({
	selector: 'app-karriere',
	templateUrl: './karriere.component.html',
	styleUrls: ['./karriere.component.scss']
})
export class KarriereComponent {

	constructor( private matDialog: MatDialog ) { }

	showInternshipDetails(type: any) {
		const dialogRef = this.matDialog.open(InternshipComponent, {
			data: { type },
			panelClass: 'dialog'
		});

		dialogRef.afterClosed().subscribe(() => {
		});
	}
}
