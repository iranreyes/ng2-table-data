import { Component } from '@angular/core';
import {TableComponent} from './table/table.component';
import {Table, ITable} from './models/table';

@Component({
  moduleId: module.id,
  selector: 'data-test-app',
  templateUrl: 'data-test.component.html',
  styleUrls: ['data-test.component.css'],
  directives: [TableComponent]
})
export class DataTestAppComponent {
  table: ITable;

  constructor(){
    this.table = new Table(3,4);
  }

  addRow(){
    this.table.addRows(1);
  }

  addColumns(){
    this.table.addColumns(1);
  }

  updateModel(model: any){
    this.table.updateCell(model.value, model.col, model.row);
    console.log(model);
  }
}
