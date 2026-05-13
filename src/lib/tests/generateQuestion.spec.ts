import { describe, expect, test } from 'vitest';
import { generateQuestion } from '$lib/utils/generateQuestion';
import { generateOperator } from '$lib/utils/generateOperator';
import { generateOperand } from '$lib/utils/generateOperand';
import type { Question } from '$lib/types/question';
import type { Operand } from '$lib/types/operand';
import type { Operator } from '$lib/types/operator';


describe('Generate question', () => {
  test("Validate question object's properties", () => {
    const operator: Operator = generateOperator();
    const firstOperand: Operand = generateOperand(operator.firstOperandRules);
    const secondOperand: Operand = generateOperand(operator.secondOperandRules, firstOperand.value, operator.name);
    const question: Question = generateQuestion(firstOperand, secondOperand, operator.name);
    expect(question).toHaveProperty('firstOperand');
    expect(question).toHaveProperty('secondOperand');
    expect(question).toHaveProperty('operator');
    expect(question).toHaveProperty('answer');
  });


})

describe("Addition operator", () => {
  test("Validate question-answer (addition++) ", () => {
    const operator = 'add';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(15);
  })

  test("Validate question-answer (addition-+) ", () => {
    const operator = 'add';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-5);
  })

  test("Validate question-answer (addition+-) ", () => {
    const operator = 'add';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(5);
  })

  test("Validate question-answer (addition--) ", () => {
    const operator = 'add';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-15);
  })
})


describe("Subtraction operator", () => {
  test("Validate question-answer (subtraction++) ", () => {
    const operator = 'subtract';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(5);
  })

  test("Validate question-answer (subtraction-+) ", () => {
    const operator = 'subtract';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-15);
  })

  test("Validate question-answer (subtraction+-) ", () => {
    const operator = 'subtract';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(15);
  })

  test("Validate question-answer (subtraction--) ", () => {
    const operator = 'subtract';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-5);
  })
})


describe("Multiplication operator", () => {
  test("Validate question-answer (multiplication++) ", () => {
    const operator = 'multiply';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(50);
  })

  test("Validate question-answer (multiplication-+) ", () => {
    const operator = 'multiply';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-50);
  })

  test("Validate question-answer (multiplication+-) ", () => {
    const operator = 'multiply';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-50);
  })

  test("Validate question-answer (multiplication--) ", () => {
    const operator = 'multiply';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(50);
  })
})

describe("Division operator", () => {
  test("Validate question-answer (division++) ", () => {
    const operator = 'divide';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(2);
  })

  test("Validate question-answer (division-+) ", () => {
    const operator = 'divide';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: false,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-2);
  })

  test("Validate question-answer (division+-) ", () => {
    const operator = 'divide';
    const firstOperand: Operand = {
      value: 10,
      isNegative: false,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(-2);
  })

  test("Validate question-answer (division--) ", () => {
    const operator = 'divide';
    const firstOperand: Operand = {
      value: 10,
      isNegative: true,
    }
    const secondOperand: Operand = {
      value: 5,
      isNegative: true,
    }

    const question: Question = generateQuestion(firstOperand, secondOperand, operator);
    expect(question.answer).toEqual(2);
  })
})
