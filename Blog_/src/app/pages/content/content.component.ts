import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { r3JitTypeSourceSpan } from '@angular/compiler';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  photoConver:string='';
  cardDescription:string='';
  cardTitle:string='';
  private id:string | null ='0';

  constructor(
    private route:ActivatedRoute
    )
  { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id =  value.get("id"))
      this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter( article => article.id.toString() == id)[0]
    
    this.cardTitle = result.title
    this.cardDescription = result.description
    this.photoConver = result.photo

    // console.log(result.description)
  }
}
