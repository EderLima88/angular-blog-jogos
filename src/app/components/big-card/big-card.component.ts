import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet,FooterComponent],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  fotoCapa:string=""
  @Input()
  cardTitulo:string=""
  @Input()
  srcDescricao:string=""
  @Input()
  Id:string="0"

  constructor(){
  }
  
  ngOnInit(): void {
  }

}
