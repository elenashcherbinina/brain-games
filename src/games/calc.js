import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const minRange = 1;
const maxRange = 10;
const operators = ['+', '-', '*'];

const getcorrectAnswer = (number1, operator, number2) => {
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = String(number1 + number2);
      break;
    case '*':
      correctAnswer = String(number1 * number2);
      break;
    case '-':
      correctAnswer = String(number1 - number2);
      break;
    default:
      throw new Error(`No operator: '${operator}'`);
  }
  return correctAnswer;
};

const getTask = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getcorrectAnswer(number1, operator, number2);
  return [question, correctAnswer];
};

export default () => run(description, getTask);
