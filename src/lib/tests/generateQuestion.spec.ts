import { describe, expect, test } from 'vitest';
import { generateQuestion } from '$lib/utils/generateQuestion';
import { generateOperator } from '$lib/utils/generateOperator';
import type { Question } from '$lib/types/question';
import type { Operator } from '$lib/types/operator';
import { addOperator, activeOperator } from '$lib/utils/defaultConfiguration';


describe('Generate question', () => {
  test("Validate question object's properties", () => {
    const operator: Operator = generateOperator(activeOperator);
    const question: Question = generateQuestion(operator);
    expect(question).toHaveProperty('firstOperand');
    expect(question).toHaveProperty('secondOperand');
    expect(question).toHaveProperty('operator');
    expect(question).toHaveProperty('answer');
  });
})

