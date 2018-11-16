import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
//import { ComponentFactoryResolver } from '@angular/core/src/render3/component_ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  @ViewChild('ivyCmpContainer') 'ivyCmpContainer': ViewContainerRef;
  
  constructor (private vcr: ViewContainerRef) {}

  ngOnInit() {
    
  }

  insertIvyCmp () {
    console.log(this.ivyCmpContainer);
    
    import('./ivy/ivy.component').then(({IvyComponent}) => {
      
      //const compoFactory = this.ivyCmpFacktory.resolveComponentFactory(IvyComponent);
      //this.vcr.createComponent(compoFactory);
      console.log(IvyComponent);
    });
  }
  


}
