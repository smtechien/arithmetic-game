import type { Operand } from '$lib/types/operand';
import type { OperandRules } from '$lib/types/operand_rules';
import { Random } from 'random-js';
import { factorizeFirstOperand } from './factorizeFirstOperand';

export function generateOperand(rules:OperandRules, firstOperand:number=0, operator:string=""): Operand {
  if (firstOperand && operator === "divide") {
    const factorsFirstOperand:number[] = factorizeFirstOperand(firstOperand);
    const random = new Random();
    const value:number = random.pick(factorsFirstOperand);
    const isNegative:boolean = rules.negativeNumber ? random.bool() : false;
    return {
      value: value,
      isNegative: isNegative,
     };
  }

  const random = new Random();
  const value = random.integer(rules.min, rules.max);

  // condition ? expressionIfTrue : expressionIfFalse
  const isNegative = rules.negativeNumber ? random.bool() : false;

  return {
    value: value,
    isNegative: isNegative,
  };
}

