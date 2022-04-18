import { Chambre } from './../Models/chambre';
import { ChambreService } from './../Services/chambre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit  {

  ch:any[]=[];


  constructor(private chambreService :ChambreService) {

   }
  ngOnInit(): void {
    this.ch = this.chambreService.Chambres;
  }



}
