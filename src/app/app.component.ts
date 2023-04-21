import { Component } from "@angular/core";

import data from "./data.json";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  themeName: string;
  gridApi: any;
  constructor() {
    this.themeName = "blue-theme";
  }

  setThemeName(name) {
    this.themeName = name;
  }

  onGridReady(params) {
    this.rowData = data;
    this.gridApi = params.api;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    // select first two nodes
    //params.api.getRowNode(0).setSelected(true);
    //params.api.getRowNode(1).setSelected(true);
  }

  columnDefs = [
    {
      field: "athlete",
      minWidth: 150,
      checkboxSelection: true
    },

    { field: "age", maxWidth: 90 },
    { field: "country", minWidth: 150 },
    { field: "sport", minWidth: 150 },
    { field: "gold" }
  ];

  rowData = [];
}
