import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {

  readonly categoriesMockup:string = "./assets/data/categories.json";
  selectedCategory: string = "";
  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    fetch(this.categoriesMockup)
    .then(response => response.json())
    .then(json => {
      this.categories = json;
    });
  }

  selectCategory(name: string){
    this.selectedCategory = name;
  }
}
