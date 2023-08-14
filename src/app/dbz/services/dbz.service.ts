import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 7000
  },
  {
    id: uuid(),
    name: 'Piccolo',
    power: 12000
  },{
    id: uuid(),
    name: 'Gohan',
    power: 10000
  },{
    id: uuid(),
    name: 'Trunks',
    power: 15000
  },{
    id: uuid(),
    name: 'Goten',
    power: 10000
  },{
    id: uuid(),
    name: 'Yamcha',
    power: 5000
  },{
    id: uuid(),
    name: 'Tenshinhan',
    power: 4000
  },{
    id: uuid(),
    name: 'Chaoz',
    power: 3000
  },{
    id: uuid(),
    name: 'Mutenroshi',
    power: 2000
  },{
    id: uuid(),
    name: 'Bulma',
    power: 1000
  },{
    id: uuid(),
    name: 'Videl',
    power: 500
  }];
    constructor() {}

    addCharacter(character: Character): void {
      const newCharacter: Character = {id: uuid(), ...character};
      this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string): void {
      this.characters = this.characters.filter(character => character.id !== id);
    }
}
