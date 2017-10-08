import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
    constructor() {}
    isCollapsed = true;
    
     
    
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      }
  ngOnInit() {
  }

}
