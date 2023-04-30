import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent  implements OnInit{
  
  //'https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-08-600x568.png'
  @Input()
  photoCover:string = '';
  @Input()
  cardTittle:string = '';
  @Input()
  cardDescription:string = '';
  @Input()
  cardLink:string = '';
  @Input()
  id:string = '0';
  
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
