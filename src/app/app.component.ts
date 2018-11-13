import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-ivy';

  constructor () {}

  ngOnInit() {
    
  }

  insertIvyCmp () {
    //import('ivy').then(({IvyComponent}) => {});
  }
  


}
