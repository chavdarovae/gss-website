import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../../' : './';

  constructor() { }

  ngOnInit(): void {
  }

}
