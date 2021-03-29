export default class GtdTask {
  Content?: string;
  DeadLine: number = 0;
  EndDate?: Date | null;
  MainTaskId?: string;
  Name?: string;
  StartDate?: Date | null;
  Status?: string;
  Tags?: Array<string>;
  Wage: number = 0;
  SubTitle?: string;
  Summary?: string;
  MarkdownContent?: string;
  Templet?: string;
}
