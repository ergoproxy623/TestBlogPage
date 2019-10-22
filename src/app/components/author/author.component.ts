import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Users} from '../../interface/users';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
@Output() sort = new EventEmitter<object>();

  users: Users[];

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.httpServ.getUsers().subscribe((res: any) => {
          console.log(res);
          this.users = res.body;
        },
        (err: any) => {
          console.log(err)
        })
  }

  getPostForUser(event) {
      console.log(event);
      this.sort.emit(event);
      console.log('end');

  }

}
