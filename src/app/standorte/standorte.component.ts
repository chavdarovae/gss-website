import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, isDevMode, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CsvService } from '../shared/csv.service';
import { ScriptService } from '../shared/script.service';
import { SharedService } from '../shared/shared.service';
import { WindowScrollingService } from '../shared/window-scrolling.service';
import { StandortDetailsComponent } from './standort-details/standort-details.component';
declare let locations: any;
declare let inputData: any;
declare let inputCode: any;
@Component({
	selector: 'app-standorte',
	templateUrl: './standorte.component.html',
	styleUrls: ['./standorte.component.scss']
})
export class StandorteComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	isMapActive = false;
	infoSeen = false;
	@ViewChild('mapContainer') mapContainer: ElementRef;

	constructor(
		private matDialog: MatDialog,
		private renderer: Renderer2,
		private scriptService: ScriptService,
		private csvService: CsvService,
		private translate: TranslateService,
		private windowScrollingService: WindowScrollingService,
		private scroller: ViewportScroller,
		private activatedRoute: ActivatedRoute,
		private sharedService: SharedService
	) {
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			this.loadMap();
		});
	}

	ngOnInit(): void {
		this.loadMap();
		this.infoSeen = !!sessionStorage.getItem('setLocationInfoSeen');
		this.activatedRoute.fragment.subscribe(fragment => {
			if (!fragment) {
				this.scroller.scrollToPosition([0,0]);
			}
		});
	}

	ngAfterViewInit(): void {
		this.renderer.listen('window', 'touchstart', (e: Event) => {
			if (this.mapContainer.nativeElement.contains(e.target)) {
				this.infoSeen = true;
				this.windowScrollingService.disableFreeze();
			}
		});
		if(this.sharedService.isMobileDevice() && !sessionStorage.getItem('setLocationInfoSeen')) {
			this.windowScrollingService.enableFreeze();
		}
	}

	loadMap() {
		this.csvService.getLocationList().subscribe(data => {
			const locationsList = data.split('\r\n');
			locationsList.shift();
			locations = [];
			inputCode = JSON.parse(JSON.stringify(inputData));
			locationsList.forEach((x, index) => {
				const translatedName = this.translate.instant('locations.branch.' + x.split(',')[0]);
				locations.push({
					name: translatedName,
					x: + x.split(',')[1],
					y: + x.split(',')[2],
					abr: x.split(',')[3].trim(),
					id: index
				})
			});

			const inputMapObj = this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/location-list.js'));
			inputMapObj.onload = () => {
				this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/map.js'));
			}
		});
	}

	showLocationDetails(location: any) {
		// this.windowScrollingService.disable();
		const dialogRef = this.matDialog.open(StandortDetailsComponent, {
			data: { location: location },
			panelClass: 'dialog'
		});

		dialogRef.afterClosed().subscribe(() => {
			// this.windowScrollingService.enable();
		});
	}
}
