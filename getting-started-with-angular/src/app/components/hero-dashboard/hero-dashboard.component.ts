import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/heroes';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {

  heroes: Hero[] =[];

  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES.slice(0,4);
  }

}
