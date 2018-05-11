import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sb-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {
  @Output() saveTodoEvt = new EventEmitter();
  @Output() cancelTodoEvt = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSaveTodo() {
    this.saveTodoEvt.emit("Saved clicked");
  }

  onCancelTodo() {
    this.cancelTodoEvt.emit("Cancelled Clicked");
  }

}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
} 
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
