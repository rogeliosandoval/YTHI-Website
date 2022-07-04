import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navChange = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  currentPosition = window.pageYOffset;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: { scrollingElement: { scrollTop: any; }; }) {
    let scroll = e.scrollingElement.scrollTop;
    if (scroll > 1) {
      this.navChange = true;
    } else {
      this.navChange = false;
    }
  }

}
