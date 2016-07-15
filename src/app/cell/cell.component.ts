import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.css']
})
export class CellComponent implements OnInit {
  value: any;
  @Input() field: any = "";
  @Input() row: number;
  @Input() col: number;
  @Output() onKey = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.value = this.field;
  }

  notifyChange(event: any){
    this.onKey.emit({
      value: event.target.value,
      col: this.col,
      row: this.row
    });
  }

}
