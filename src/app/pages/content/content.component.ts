import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { dataFake } from '../../data/daFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://primagames.com/wp-content/uploads/2023/05/silent-hill-3-feature.png"
  contentTitle:string = "Heather Mason"
  contentDescription:string = "Protagonista do jogo Silent Hill 3, junto com seu pai, ambos fugindo de forças que ela desconhece. À véspera de seu aniversário de 18 anos, Heather começa a ter pesadelos e seu pai desaparece, e ela acaba descobrindo que não é quem pensa que é."
  private id:string | null = "0"

constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
  )
  this.setValuesToComponent(this.id)
}

setValuesToComponent(id:string | null) {
  const result = dataFake.filter(article => article.id.toString() == id)[0]
            
  this.contentTitle = result.title
  this.contentDescription = result.description
  this.photoCover = result.photoCover

}

}
