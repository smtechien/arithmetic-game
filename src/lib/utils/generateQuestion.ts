import type { Question } from "$lib/types/question";
import { generateOperand } from "./generateOperand";
import { generateOperator } from "./generateOperator";

export function generateQuestion():Question {

	const operator = generateOperator();
	const firstOperand = generateOperand(operator.firstOperandRules);
	const secondOperand = generateOperand(
		operator.secondOperandRules,
		firstOperand.value,
		operator.name
	);

  const firstOperandValue:number = firstOperand.isNegative ? firstOperand.value * -1 : firstOperand.value;
  const secondOperandValue:number = secondOperand.isNegative ? secondOperand.value * -1 : secondOperand.value;

  let answer: number;

  switch (operator.name) {
    case "add":
      answer = firstOperandValue + secondOperandValue;
      break;
    case "subtract":
      answer = firstOperandValue - secondOperandValue;
      break;
    case "multiply":
      answer = firstOperandValue * secondOperandValue;
      break;
    case "divide":
      answer = firstOperandValue / secondOperandValue;
      break;
    default:
      answer = 0;
      break;
  }

  return {
    firstOperand: firstOperandValue,
    secondOperand: secondOperandValue,
    operator: operator.symbol,
    answer: answer,
  }


}
