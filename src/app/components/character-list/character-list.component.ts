import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  arrCharacters: Character[] = [];
  next: string = "";
  prev: string = "";
 

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    //en caso de que se haga busqueda por genero
    this.activatedRoute.params.subscribe((params: any) => {
    
      if(params.gender){
        //busco por genero
        this.charactersService.filterByGender(params.gender).subscribe((data:any) =>{
          this.asignent(data);
        })
      } else {
        this.charactersService.getAll().subscribe((data: any) => {
          this.asignent(data);
        })
      }
    })

    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
    
      if(queryParams.name && queryParams.name !== 'none'){
        //buscar por nombre
        this.charactersService.filterByName(queryParams.name).subscribe((data: any) => {
          this.asignent(data)
        })
      }else if(queryParams.name === 'none'){
        this.charactersService.getAll().subscribe((data: any) => {
          this.asignent(data);
        })
      }
    })

  }

  goToPage(url: string):void{
    this.charactersService.getAll(url).subscribe((data:any) =>{
      this.asignent(data);
    })
  }

  asignent(pData : any): void{
      this.next = pData.info.next;
      this.prev = pData.info.prev;
      this.arrCharacters = pData.results;
  }

}
