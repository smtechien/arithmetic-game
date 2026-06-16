import type { Question } from './question.ts';

export interface QuestionAnswer {
  id: number;
  question: Question;
  answers: number[];
  duration: number;
}
