import type { Result } from "$lib/types/result";
import type { QuestionAnswer } from "$lib/types/question_answer";
import type { Question } from '$lib/types/question';

export function setStartTime(startTime: number): void {
  sessionStorage.setItem('start_time', startTime.toString());
}

export function getStartTime(): null | number {
  try {
    const startTime = sessionStorage.getItem('start_time');
    if (startTime) {
      return Number(startTime);
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
}


export function setEndTime(endTime: number): void {
  sessionStorage.setItem('end_time', endTime.toString());
}

export function getEndTime(): null | number {
  try {
    const endTime = sessionStorage.getItem('end_time');
    if (endTime) {
      return Number(endTime);
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
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

export function getQuestionAnswerLength(): number {
  try {
    const questionAnswerStorage = sessionStorage.getItem('question_answer');
    if (questionAnswerStorage) {
      const questionAnswerStorageObject = JSON.parse(questionAnswerStorage);
      return questionAnswerStorageObject.length;
    }
    return 0;
  } catch (err) {
    console.log(err);
    return 0;
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

export function getResults(): Result | null {
  try {
    if (checkQuestionAnswerLength()) {
      const startTime = getStartTime();
      const endTime = getEndTime();
      const records = getQuestionAnswer();
      if (startTime && endTime && records) {
        const results: Result = { startTime, endTime, records };
        return results;
      }
      return null;
    }
    return null
  } catch (err) {
    console.log(err);
    return null;
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

