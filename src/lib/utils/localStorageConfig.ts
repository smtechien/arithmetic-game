import type { Operator } from "$lib/types/operator";
import { addOperator, subtractOperator, multiplyOperator, divideOperator, activeOperator } from "./defaultConfiguration";

export function setConfig(operator:Operator):void {
  // JSON.stringify because it expected string type parameter;
  localStorage.setItem(operator.name, JSON.stringify(operator));
}

export function setDefaultConfig():void {
  localStorage.setItem(addOperator.name, JSON.stringify(addOperator));
  localStorage.setItem(subtractOperator.name, JSON.stringify(subtractOperator));
  localStorage.setItem(multiplyOperator.name, JSON.stringify(multiplyOperator));
  localStorage.setItem(divideOperator.name, JSON.stringify(divideOperator));
}

export function getAllConfig():Operator[]{
  try {
    const add = localStorage.getItem(addOperator.name);
    const subtract = localStorage.getItem(subtractOperator.name);
    const multiply = localStorage.getItem(multiplyOperator.name);
    const divide = localStorage.getItem(divideOperator.name);

    if (add && subtract && multiply && divide) {
      const addConfig = JSON.parse(add);
      const subtractConfig = JSON.parse(subtract);
      const multiplyConfig= JSON.parse(multiply);
      const divideConfig = JSON.parse(divide);

      const allOperators = [addConfig, subtractConfig, multiplyConfig, divideConfig];
      return allOperators;
    } else {
      setDefaultConfig();
      return activeOperator;
    }
  } catch(error) {
    setDefaultConfig();
    return activeOperator;
  }
}


export function getConfig(name: string, status: boolean): Operator|null{
  try {
    const operator = localStorage.getItem(name);

    if (operator) {
      const operatorConfig = JSON.parse(operator);
      return operatorConfig;
    } else {
      console.log('Configurations not found. Added default configuration ');
      return null;
    }
  } catch(error) {
    console.log('Configurations not found. Added default configuration ');
    return null;
  }
}

export function getActiveOperator(): Operator[] | null {
  try {
    const operators = getAllConfig(); 
    const activeOperators = operators.filter(operator => operator.isActive);
    return activeOperators;
  } catch (error) {
    console.log(error)
    return null;
  }
}
