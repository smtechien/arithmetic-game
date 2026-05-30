import { describe, expect, test } from 'vitest';
import type { Operator } from '$lib/types/operator';
import { generateOperator } from '$lib/utils/generateOperator';
import { activeOperator } from '$lib/utils/defaultConfiguration';

describe('Generate Operator', () => {

  test("Validate operator object's properties", () => {
    const operator: Operator = generateOperator(activeOperator);
    expect(operator).toHaveProperty('name');
    expect(operator).toHaveProperty('symbol');
    expect(operator).toHaveProperty('firstOperandRules');
    expect(operator).toHaveProperty('secondOperandRules');
  });

  test("Validate operator name", () => {
    const names = ['add', 'subtract', 'multiply', 'divide'];
    const operator: Operator = generateOperator(activeOperator);
    expect(operator.name).toSatisfy(value => names.includes(value));
  });

  test("Validate operator symbol", () => {
    const symbols = ['&plus;', '&minus;', '&times;', '&divide;'];
    const operator: Operator = generateOperator(activeOperator);
    expect(operator.symbol).toSatisfy(value => symbols.includes(value));
  });
})
