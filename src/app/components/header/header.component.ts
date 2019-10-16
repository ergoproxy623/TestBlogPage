import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(httpServ: HttpService) { }

  ngOnInit() {
  }

getBlogs() {
  this.httpServ.getBlogs.subscribe(res => {
    console.log(res);
  })
}

}
