import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WindowScrollingService {
	private styleTag: HTMLStyleElement;
	private freezeStyleTag: HTMLStyleElement;

	constructor() {
		this.styleTag = this.buildStyleElement();
		this.freezeStyleTag = this.buildBodyFreezeStyleElement();
	}

	public enable() {
		document.body.removeChild(this.styleTag);
	}

	public disable() {
		document.body.appendChild(this.styleTag);
	}

	private buildStyleElement(): HTMLStyleElement {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute('data-debug', 'Injected by window scolling service');
		style.textContent = `
			body {
				overflow: hidden !important;
			}
		`;
		return (style);
	}

	public enableFreeze() {
		document.body.appendChild(this.freezeStyleTag);
	}
	
	public disableFreeze() {
		if(getComputedStyle(document.body).touchAction === 'pan-x') {
			document.body.removeChild(this.freezeStyleTag);
		}
	}

	private buildBodyFreezeStyleElement(): HTMLStyleElement {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute('data-debug', 'Injected by window scolling service with scroll freez');
		style.textContent = `
			body {
				touch-action: pan-x !important;
			}
		`;
		return (style);
	}
}
