import { NgModule } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop";

const allMaterialComponents = [
  DragDropModule
]

@NgModule({
  exports: [allMaterialComponents],
  imports: [allMaterialComponents]
})
export class MaterialModule { }
