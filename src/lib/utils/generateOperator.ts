import type { Operator } from "$lib/types/operator";
import { CONFIG } from "./defaultConfigurations";
import { Random } from "random-js";

export function generateOperator():Operator{
  const activeOperators:Operator[] = CONFIG.activeOperator;
  const random = new Random();
  const operator:Operator = random.pick(activeOperators);

  return operator;
}
