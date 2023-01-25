import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InternshipComponent } from './karriere/internship/internship.component';
import { KarriereComponent } from './karriere/karriere.component';
import { KfzBereichComponent } from './kfz-bereich/kfz-bereich.component';
import { CsvService } from './shared/csv.service';
import { ScriptService } from './shared/script.service';
import { SharedService } from './shared/shared.service';
import { WindowScrollingService } from './shared/window-scrolling.service';
import { StandorteComponent } from './standorte/standorte.component';
import { TarnsportschaedenComponent } from './transportschaeden/transportschaeden.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { VersicherungComponent } from './versicherung/versicherung.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
    	FooterComponent,
		UnternehmenComponent,
		StandorteComponent,
		KfzBereichComponent,
		VersicherungComponent,
		TarnsportschaedenComponent,
		ImpressumComponent,
		DatenschutzComponent,
		HomeComponent,
		KarriereComponent,
		InternshipComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: 'de',
			loader: {
				provide: TranslateLoader,
				useFactory: httpTranslateLoaderFactory,
				deps: [HttpClient]
			}
		}),
		MatDialogModule
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
