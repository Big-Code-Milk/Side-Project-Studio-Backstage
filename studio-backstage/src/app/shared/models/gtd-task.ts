export default class GtdTask {
  Content?: string;
  DeadLine?: number;
  EndDate?: Date | null;
  MainTaskId?: string;
  Name?: string;
  StartDate?: Date | null;
  Status?: string;
  Tags?: Array<string>;
  Wage?: number;
  SubTitle?: string;
  Summary?: string;
  MarkdownContent?: string;
  Templet?: string;
}
