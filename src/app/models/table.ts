export interface ITable{
  col: number;
  row: number;
  table:Array<Array<string>>;
  addRows: (rows) => void;
  addColumns: (number) => void;
  updateCell: (value, col, row) => void;
}

export class Table implements ITable{
  col:number;
  row:number;
  table:Array<Array<string>>;

  constructor(col = 1, row = 1){
    this.col = col;
    this.row = row;
    this.table = [];

    this.addRows(this.row);
  }

  addRows(rows) {
    for (var i = 0; i < rows; i++) {
      var row = new Array(this.col);
      row.fill("hola");
      this.table.push(row);
    }
  }

  addColumns(columns) {
    this.table.forEach(function(elem){
      for (var i = 0; i < columns; i++) {
        elem.push("");
      }
    })
  }

  updateCell(value, col, row){
    console.log(this.table);
    this.table[col][row] = value;
  }
}
