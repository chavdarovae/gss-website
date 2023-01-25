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
		component: UnternehmenComponent
	},
	{
		path: 'karriere',
		component: KarriereComponent
	},
	{
		path: 'standorte',
		component: StandorteComponent
	},
	{
		path: 'versicherung',
		component: VersicherungComponent
	},
	{
		path: 'kfz-bereich',
		component: KfzBereichComponent
	},
	{
		path: 'tarnsportschaeden',
		component: TarnsportschaedenComponent
	},
	{
		path: 'impressum',
		component: ImpressumComponent
	},
	{
		path: 'datenschutz',
		component: DatenschutzComponent
	},
	{
		path: '',
		pathMatch: 'prefix', //default
		redirectTo: 'home'
	}
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
	anchorScrolling: 'enabled',
	scrollPositionRestoration: 'enabled',
	useHash: false,
	enableTracing: false
});
