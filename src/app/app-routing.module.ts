import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KarriereComponent } from './karriere/karriere.component';
import { KfzBereichComponent } from './kfz-bereich/kfz-bereich.component';
import { StandorteComponent } from './standorte/standorte.component';
import { TarnsportschaedenComponent } from './transportschaeden/transportschaeden.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { VersicherungComponent } from './versicherung/versicherung.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'unternehmen',
		component: UnternehmenComponent,
		data: {}
	},
	{
		path: 'karriere',
		component: KarriereComponent,
		data: {}
	},
	{
		path: 'standorte',
		component: StandorteComponent,
		data: {}
	},
	{
		path: 'versicherung',
		component: VersicherungComponent,
		data: {}
	},
	{
		path: 'kfz-bereich',
		component: KfzBereichComponent,
		data: {}
	},
	{
		path: 'tarnsportschaeden',
		component: TarnsportschaedenComponent,
		data: {}
	},
	{
		path: 'impressum',
		component: ImpressumComponent,
		data: {}
	},
	{
		path: 'datenschutz',
		component: DatenschutzComponent,
		data: {}
	},
	{
		path: '',
		pathMatch: 'prefix', //default
		redirectTo: 'home'
	},
	// {
	// 	path: '**',
	// 	component: NichtGefundenComponent
	// },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
	anchorScrolling: 'enabled',
	scrollPositionRestoration: 'enabled',
	useHash: false,
	enableTracing: false
});
