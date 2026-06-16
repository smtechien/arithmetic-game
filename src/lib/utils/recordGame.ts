import type { Result } from "$lib/types/result";
import type { QuestionAnswer } from "$lib/types/question_answer";
import type { Question } from '$lib/types/question';

export function setStartTime(startTime: number): void {
  sessionStorage.setItem('start_time', startTime.toString());
}

export function setEndTime(endTime: number): void {
  sessionStorage.setItem('end_time', endTime.toString());
}

function checkQuestionAnswerLength(): boolean {
  try {
    const questionAnswerStorage = sessionStorage.getItem('question_answer');
    if (questionAnswerStorage) {
      if (questionAnswerStorage.length > 0) {
        return true;
      }
      return false;
    }
    return false
  } catch (err) {
    console.log(err);
    return false;
  }
}

export function getQuestionAnswer(): QuestionAnswer[] | null {
  try {
    const questionAnswerStorage = sessionStorage.getItem('question_answer');
    if (questionAnswerStorage) {
      const questionAnswerStorageObject = JSON.parse(questionAnswerStorage);
      return questionAnswerStorageObject;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export function setQuestion(id: number, question: Question): void {
  try {
    if (checkQuestionAnswerLength()) {
      const questionAnswerStorageObject = getQuestionAnswer();
      if (questionAnswerStorageObject) {
        const questionAnswer: QuestionAnswer = { id: id, question: question, answers: [], duration: 0, };
        const questionAnswers: QuestionAnswer[] = [...questionAnswerStorageObject, questionAnswer];
        sessionStorage.setItem('question_answer', JSON.stringify(questionAnswers));
      }
    } else {
      const questionAnswer: QuestionAnswer[] = [{ id: id, question: question, answers: [], duration: 0, }];
      sessionStorage.setItem('question_answer', JSON.stringify(questionAnswer));
    }
  } catch (err) {
    console.log(err);
  }
}

export function setAnswer(id: number, answer: number) {
  try {
    if (checkQuestionAnswerLength()) {
      let questionAnswerStorageObject = getQuestionAnswer();
      if (questionAnswerStorageObject) {
        const questionAnswerStorage: QuestionAnswer = questionAnswerStorageObject[id - 1];
        const answers: number[] = [...questionAnswerStorage.answers, answer];
        questionAnswerStorageObject[id - 1] = { ...questionAnswerStorage, answers: answers };
        sessionStorage.setItem('question_answer', JSON.stringify(questionAnswerStorageObject));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function setAnswerDuration(id: number, duration: number) {
  try {
    if (checkQuestionAnswerLength()) {
      let questionAnswerStorageObject = getQuestionAnswer();
      if (questionAnswerStorageObject) {
        const questionAnswerStorage: QuestionAnswer = questionAnswerStorageObject[id - 1];
        questionAnswerStorageObject[id - 1] = { ...questionAnswerStorage, duration: duration };
        sessionStorage.setItem('question_answer', JSON.stringify(questionAnswerStorageObject));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function clearRecords(): void {
  try {
    if (checkQuestionAnswerLength()) {
      sessionStorage.removeItem('question_answer');
      sessionStorage.removeItem('start_time');
      sessionStorage.removeItem('end_time');
    }
  } catch (err) {
    console.log(err);
  }
}

export function getGame() {

}

