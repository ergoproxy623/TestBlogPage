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
  }


  getBlogs(event) {
    this.httpServ.getPosts().subscribe((res: any) => {

          console.log(res);
          this.posts = res.body;
          this.posts = this.posts.filter( a => a.author === event.id);
        },
        (err: any) => {
          console.log(err);
        });
  }

  getComments(post) {
    this.httpServ.getComments().subscribe((res: any) => {
          console.log(res);
          console.log(post.id);

          this.comments = res.body;
          this.comments = this.comments.filter(a => a.post === post.id);
        },
        (err: any) => {
          console.log(err);
        });


  }



 sortArr(event) {
      this.getBlogs(event);
      this.userName = event.username;

      console.log(this.posts);

}

sortComments(post) {
    console.log('sort');
    this.getComments(post);
}

}







