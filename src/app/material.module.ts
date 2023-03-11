import { NgModule } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatDialogModule} from "@angular/material/dialog";

const allMaterialComponents = [
  DragDropModule,
  MatDialogModule
]

@NgModule({
  exports: [allMaterialComponents],
  imports: [allMaterialComponents]
})
export class MaterialModule { }
