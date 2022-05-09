import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  active = 0;

  images = ["../../assets/pics/1.jpg", "../../assets/pics/2.jpg", "../../assets/pics/3.jpg", "../../assets/pics/4.jpg"];

  model = 1;

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Nos chambres',
            link: 'categories',
            index: 0
        }, {
            label: 'Mes reservations',
            link: 'reservations',
            index: 1
        }

    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

}
