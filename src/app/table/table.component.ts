import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CellComponent} from '../cell/cell.component';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css'],
  directives: [CellComponent]
})
export class TableComponent implements OnInit {
  @Input() entry: any;
  @Output() onUpdate = new EventEmitter();

  constructor() {
    // console.log(this.table);
  }

  ngOnInit() {
    console.log(this.entry);
  }

  onDataChange(event){
    this.onUpdate.emit(event);
  }

}
