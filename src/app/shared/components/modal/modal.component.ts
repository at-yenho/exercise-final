import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() name: string;
  @Input() position: number;
  @Output() positionDeleted = new EventEmitter();
  isHidden = true;
  constructor() { }

  ngOnInit() {
  }
  deleteItem(position) {
    this.positionDeleted.emit(position);
  }
}
