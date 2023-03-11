import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks = [];

  constructor(private tasksService: TasksService, private dialog: MatDialog) {}

  ngOnInit() {}

  public openDialogWindow(): void {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    })
  }

}
