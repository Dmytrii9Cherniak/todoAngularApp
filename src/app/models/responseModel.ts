import { TasksModel } from "./tasksModel";

export interface ResponseModel {
  statusCode: number;
  message: string;
  tasks: TasksModel[];
}
