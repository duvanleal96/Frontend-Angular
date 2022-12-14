import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  public page!: number;
  constructor(private articleService: ArticleService) { 
    this.getArticles();
  }

  ngOnInit(): void {
  }

  getArticles(): void{
    this.articleService.getArticles()
    .subscribe(articleData=>{this.articles=articleData})
  }

  buyProduct(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Added product',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
