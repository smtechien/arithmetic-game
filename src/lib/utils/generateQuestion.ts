import type { Question } from "$lib/types/question";
import type { Operand } from "$lib/types/operand";

export function generateQuestion(firstOperand: Operand, secondOperand: Operand, operator: string):Question {

  const firstOperandValue:number = firstOperand.isNegative ? firstOperand.value * -1 : firstOperand.value;
  const secondOperandValue:number = secondOperand.isNegative ? secondOperand.value * -1 : secondOperand.value;

  let answer: number;

  switch (operator) {
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
    firstOperand: firstOperand.value,
    secondOperand: secondOperand.value,
    operator: operator,
    answer: answer,
  }


}
