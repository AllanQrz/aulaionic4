import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {

  url: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://pt.wikipedia.org/wiki/Bateria'
    )
  }

}
