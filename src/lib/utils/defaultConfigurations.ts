import type { Configurations } from "$lib/types/configurations";

export const CONFIG:Configurations = {
  activeOperator : [
    {
       name: 'add',
       symbol: '&plus;',
       firstOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'subtract',
       symbol: '&minus;',
       firstOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'multiply',
       symbol: '&times;',
       firstOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'divide',
       symbol: '&divide;',
       firstOperandRules: {
         max: 10,
         min: 1,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 10,
         min: 0,
         negativeNumber: true,
       }
    },
  ]
}
