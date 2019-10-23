import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Posts} from '../../interface/posts';
import {Comments} from '../../interface/comments';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  posts: Posts [];
  comments: Comments [];
  userName: string;


  constructor(private httpServ: HttpService) {
  }

  ngOnInit() {
    this.getComments();
  }


  getBlogs() {
    this.httpServ.getPosts().subscribe((res: any) => {
          console.log(res);
          this.posts = res.body;
        },
        (err: any) => {
          console.log(err);
        });
  }

  getComments() {
    this.httpServ.getComments().subscribe((res: any) => {
          console.log(res);
          this.comments = res.body;
        },
        (err: any) => {
          console.log(err);
        });


  }



 sortArr(event) {
      this.getBlogs();
      this.userName = event.username;
      this.posts = this.posts.filter( a => a.author === event.id);
      console.log(this.posts);

}

sortComments() {
 console.log('sort');
}

}







