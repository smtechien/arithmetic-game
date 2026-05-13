import { describe, expect, test } from 'vitest';
import type { Operand } from '$lib/types/operand';
import type { Operator } from '$lib/types/operator';
import type { OperandRules } from '$lib/types/operand_rules';
import { CONFIG } from '$lib/utils/defaultConfigurations';
import { generateOperand } from '$lib/utils/generateOperand';
import { factorizeFirstOperand } from '$lib/utils/factorizeFirstOperand';

describe('Generate First Operand', () => {

  const operandRules:Operator[] = CONFIG.activeOperator;
  const addRules:OperandRules = operandRules[0].firstOperandRules;
  const subtractRules:OperandRules = operandRules[1].firstOperandRules;
  const multiplyRules:OperandRules = operandRules[2].firstOperandRules;
  const divideRules:OperandRules = operandRules[3].firstOperandRules;

  test("Validate first operand's properties", () => {
    const firstOperand:Operand = generateOperand(addRules);

    expect(firstOperand).toHaveProperty('value');
    expect(firstOperand).toHaveProperty('isNegative');
  });

  test("Validate first operand's values on addition operator (+) ", () => {
    const firstOperandInAddition:Operand = generateOperand(addRules);
    expect (firstOperandInAddition.value).toBeLessThan(1000);
  });

  test("Validate first operand's values on subtraction operator (-) ", () => {
    const firstOperandInSubstraction:Operand = generateOperand(subtractRules);
    expect (firstOperandInSubstraction.value).toBeLessThan(1000);
  });

  test("Validate first operand's values on multiplication operator (*) ", () => {
    const firstOperandInMultiplication:Operand = generateOperand(multiplyRules);
    expect (firstOperandInMultiplication.value).toBeLessThan(100);
  });

  test("Validate first operand's values on division operator (/) ", () => {
    const firstOperandInDivision:Operand = generateOperand(divideRules);
    expect (firstOperandInDivision.value).toBeLessThan(1000);
  });
})

describe('Generate Second Operand', () => {

  const operandRules:Operator[] = CONFIG.activeOperator;
  const addRules:OperandRules = operandRules[0].secondOperandRules;
  const subtractRules:OperandRules = operandRules[1].secondOperandRules;
  const multiplyRules:OperandRules = operandRules[2].secondOperandRules;
  const divideRules:OperandRules = operandRules[3].secondOperandRules;

  test("Validate second operand's properties", () => {
    const secondOperand:Operand = generateOperand(addRules);
    expect(secondOperand).toHaveProperty('value');
    expect(secondOperand).toHaveProperty('isNegative');
  });

  test("Validate second operand's values on addition operator (+) ", () => {
    const secondOperandInAddition:Operand = generateOperand(addRules);
    expect (secondOperandInAddition.value).toBeLessThan(1000);
  });

  test("Validate second operand's values on subtraction operator (-) ", () => {
    const secondOperandInSubstraction:Operand = generateOperand(subtractRules);
    expect (secondOperandInSubstraction.value).toBeLessThan(1000);
  });

  test("Validate second operand's values on multiplication operator (*) ", () => {
    const secondOperandInMultiplication:Operand = generateOperand(multiplyRules);
    expect (secondOperandInMultiplication.value).toBeLessThan(100);
  });

  test("Validate second operand's values on division operator (/) ", () => {
    const firstOperand:Operand = generateOperand(divideRules);
    const factorsFirstOperand:number[] = factorizeFirstOperand(firstOperand.value);
    const secondOperandInDivision:Operand = generateOperand(divideRules, firstOperand.value, "divide");
    expect (secondOperandInDivision.value).toSatisfy(value => factorsFirstOperand.includes(value));
  });
})
