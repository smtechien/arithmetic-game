import type { QuestionAnswer } from './question_answer.ts';


export interface Result {
  startTime: number;
  endTime: number;
  records: QuestionAnswer[];

}
