import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface ToDo {
  todo: string;
}

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  constructor() {}

  @Input() todo: ToDo | undefined;

  @Output() Deleted: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  deleteItem() {
    this.Deleted.emit();
  }
}
