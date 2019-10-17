import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
  }
  name: string = "Name";

getBlogs() {
  this.httpServ.getSmartphone().subscribe( (res: any) => {
    console.log(res)
  },
      (err: any) => {console.log(err)})
}

}
