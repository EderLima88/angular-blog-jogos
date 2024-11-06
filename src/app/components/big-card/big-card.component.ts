import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input()
  fotoCapa:string=""
  @Input()
  cardTitulo:string=""
  @Input()
  srcDescricao:string=""

  constructor(){
  }
  
  ngOnInit(): void {
  }

}
