import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { TasksComponent } from "./components/tasks/tasks.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {DialogComponent} from "./components/dialog/dialog.component";
import {ButtonComponent} from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DialogComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
