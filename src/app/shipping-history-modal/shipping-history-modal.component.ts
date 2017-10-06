
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shipping-history-modal',
  templateUrl: './shipping-history-modal.component.html',
  styleUrls: ['./shipping-history-modal.component.css'],
})
export class ShippingHistoryModalComponent {
  closeResult: string;
  
    constructor(private modalService: NgbModal) {}
  
    open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}







































/* import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
Component({
  selector: 'app-shipping-history-modal',
  templateUrl: './shipping-history-modal.component.html',
  styleUrls: ['./shipping-history-modal.component.css']
})
export class ShippingHistoryModalComponent implements OnInit {
@Input('show-modal') showModal: boolean;
  @Input('title') title: string;
  @Input('sub-title') subTitle: string;
  @Input('cancel-label') cancelLabel: string;
  @Input('positive-label') positiveLabel: string;

  @Output('closed') closeEmitter: EventEmitter < ModalResult > = new EventEmitter < ModalResult > ();
  @Output('loaded') loadedEmitter: EventEmitter < Modal > = new EventEmitter < Modal > ();
  @Output() positiveLabelAction = new EventEmitter();
  constructor() { }

 ngOnInit() {
    this.loadedEmitter.next(this);
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.POSITIVE
    });
  }

  positiveAction() {
    this.positiveLabelAction.next(this);
    return false;
  }

  cancelAction() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.CANCEL
    });
    return false;
  }
}
export enum ModalAction { POSITIVE, CANCEL }

export interface ModalResult {
  action: ModalAction;
}
 */