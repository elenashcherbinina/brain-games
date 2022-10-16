import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const minRange = 1;
const maxRange = 10;
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '*':
      return x * y;
    case '-':
      return x - y;
    default:
      throw new Error(`No operator: '${operator}'`);
  }
};

const getTask = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = String(`${number1} ${operator} ${number2}`);
  const correctAnswer = String(calculate(number1, number2, operator));
  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
