import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  fotoCover:string=""
  @Input()
  cardTitulo:string=""
  @Input()
  Id:string="0"

   constructor(){}
 
  ngOnInit(): void {
  }

}
