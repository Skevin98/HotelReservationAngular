import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images=["../../assets/pics/plage.jpg","../../assets/pics/spa.jpg","../../assets/pics/feu.png","../../assets/pics/h.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
