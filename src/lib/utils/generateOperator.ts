import type { Operator } from "$lib/types/operator";
import { Random } from "random-js";

export function generateOperator(activeOperators:Operator[]):Operator{
  const random = new Random();
  const operator:Operator = random.pick(activeOperators);
  return operator;
}
