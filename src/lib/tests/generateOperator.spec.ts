import { describe, expect, test } from 'vitest';
import type { Operator } from '$lib/types/operator';
import { generateOperator } from '$lib/utils/generateOperator';

describe('Generate Operator', () => {

  test("Validate operator object's properties", () => {
    const operator: Operator = generateOperator();
    expect(operator).toHaveProperty('name');
    expect(operator).toHaveProperty('symbol');
    expect(operator).toHaveProperty('firstOperandRules');
    expect(operator).toHaveProperty('secondOperandRules');
  });

  test("Validate operator name", () => {
    const names = ['add', 'subtract', 'multiply', 'divide'];
    const operator: Operator = generateOperator()
    expect(operator.name).toSatisfy(value => names.includes(value));
  });

  test("Validate operator symbol", () => {
    const symbols = ['+', '-', '*', '/'];
    const operator: Operator = generateOperator()
    expect(operator.symbol).toSatisfy(value => symbols.includes(value));
  });


})
