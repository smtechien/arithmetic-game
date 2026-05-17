import type { OperandRules } from "./operand_rules";
export type OperatorSymbol = '&plus;' | '&minus;' | '&times;' | '&divide;';

export interface Operator {
  name: string;
  symbol: OperatorSymbol;
  firstOperandRules: OperandRules,
  secondOperandRules: OperandRules,
}
