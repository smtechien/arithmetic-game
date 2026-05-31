import type { Operator } from "$lib/types/operator";

export const addOperator: Operator = {
  name: 'add',
  symbol: '&plus;',
  firstOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  },
  secondOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  }
};

export const subtractOperator: Operator = {
  name: 'subtract',
  symbol: '&minus;',
  firstOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  },
  secondOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  },
};

export const multiplyOperator: Operator = {
  name: 'multiply',
  symbol: '&times;',
  firstOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  },
  secondOperandRules: {
    max: 10,
    min: 0,
    negativeNumber: 'active',
  }
};

export const divideOperator: Operator = {
  name: 'divide',
  symbol: '&divide;',
  firstOperandRules: {
    max: 10,
    min: 1,
    negativeNumber: 'active',
  },
  secondOperandRules: {
    max: 10,
    min: 1,
    negativeNumber: 'active',
  }
 }

export const activeOperator: Operator[] = [addOperator, subtractOperator, multiplyOperator, divideOperator];
