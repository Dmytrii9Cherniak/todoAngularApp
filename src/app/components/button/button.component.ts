import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor(private dialog: MatDialog) {}

  public openDialogWindow(): void {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    })
  }

}
