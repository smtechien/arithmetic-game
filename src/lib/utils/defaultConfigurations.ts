import type { Configurations } from "$lib/types/configurations";

export const CONFIG:Configurations = {
  activeOperator : [
    {
       name: 'add',
       symbol: '+',
       firstOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'subtract',
       symbol: '-',
       firstOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'multiply',
       symbol: '*',
       firstOperandRules: {
         max: 100,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 100,
         min: 0,
         negativeNumber: true,
       }
    },
    {
       name: 'divide',
       symbol: '/',
       firstOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       },
       secondOperandRules: {
         max: 1000,
         min: 0,
         negativeNumber: true,
       }
    },
  ]
}
