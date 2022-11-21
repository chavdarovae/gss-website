import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InternshipComponent } from './karriere/internship/internship.component';
import { KarriereComponent } from './karriere/karriere.component';
import { NichtGefundenComponent } from './nicht-gefunden/nicht-gefunden.component';
import { CsvService } from './shared/csv.service';
import { ScriptService } from './shared/script.service';
import { SharedService } from './shared/shared.service';
import { WindowScrollingService } from './shared/window-scrolling.service';
import { StandortDetailsComponent } from './standorte/standort-details/standort-details.component';
import { StandorteComponent } from './standorte/standorte.component';
import { TransportunternehmerComponent } from './transportunternehmer/transportunternehmer.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		UnternehmenComponent,
		StandorteComponent,
		DienstleistungenComponent,
		KarriereComponent,
		TransportunternehmerComponent,
		NichtGefundenComponent,
		ImpressumComponent,
		DatenschutzComponent,
		HomeComponent,
		StandortDetailsComponent,
		InternshipComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CoreModule,
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: 'de',
			loader: {
				provide: TranslateLoader,
				useFactory: httpTranslateLoaderFactory,
				deps: [HttpClient]
			}
		}),
		MatDialogModule,
		MatTabsModule,
		MatTableModule
	],
	providers: [
		SharedService,
		CsvService,
		ScriptService,
		WindowScrollingService,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
