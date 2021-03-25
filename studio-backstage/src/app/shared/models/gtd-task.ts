export default class GtdTask {
  Content?: string;
  DeadLine: number = 0;
  EndDate: Date | null = null;
  MainTaskId: string = "";
  Name?: string;
  StartDate: Date | null = null;
  Status?: string;
  Tags?: Array<string> = [];
  Wage: number = 0;
}
