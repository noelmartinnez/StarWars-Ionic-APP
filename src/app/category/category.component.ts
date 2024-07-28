import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {
  @Input() theCategory = new Category();
  @Input() selected: boolean = false;
  @Output() clicked = new EventEmitter<string>();

  articles: any[] = [];

  constructor(private wikiSrv: WikiService) { }

  ngOnInit() {}

  click() {
    this.clicked.emit(this.theCategory.name);
    console.log("Clicked on " + this.theCategory.name);
    this.getArticles(this.theCategory.name);
  }

  getArticles(category: string){
    this.wikiSrv.getAllArticles(category).subscribe(
      (result:any) => {
        this.articles = result.results;
      }
    );
  }
}
