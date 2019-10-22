import {Component, OnInit} from '@angular/core';
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



  constructor(private httpServ: HttpService) {
  }

  ngOnInit() {
    this.getBlogs();
    this.getComments();
  }


  getBlogs() {
    this.httpServ.getPosts().subscribe((res: any) => {
          console.log(res);
          this.posts = res.body;
        },
        (err: any) => {
          console.log(err)
        })
  }

  getComments() {
    this.httpServ.getComments().subscribe((res: any) => {
          console.log(res);
          this.comments = res.body;
        },
        (err: any) => {
          console.log(err)
        })


  }



 sortPosts(event) {
      console.log(event);
      console.log("srabotalo");
}

}







