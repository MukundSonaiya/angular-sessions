import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/heroes';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] =[];
  
  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES
  }

}
