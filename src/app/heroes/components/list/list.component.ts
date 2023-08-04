import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Batman', 'Superman',
  'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America',
  'Black Adam', 'Flash', 'Linterna Verde', 'Blue Beetle',
  'Doctor Strange', 'Ant-Man', 'Wolverine', 'Cyclops', 'Deadpool'];

  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
