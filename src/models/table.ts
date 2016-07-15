export class Table{
  col:number;
  row:number;
  table:Array<Array<string>>;

  constructor(col = 1, row = 1){
    this.col = col;
    this.row = row;
    this.table = [];
  }

  addRows(rows) {
    for (var i = 0; i < rows; i++) {
      var row = new Array(this.col);
      row = row.map(function(){return ""});
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
}
