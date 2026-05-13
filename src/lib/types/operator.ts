import type { OperandRules } from "./operand_rules";
export type OperatorSymbol = '+' | '-' | '*' | '/';

export interface Operator {
  name: string;
  symbol: OperatorSymbol;
  firstOperandRules: OperandRules,
  secondOperandRules: OperandRules,
}
