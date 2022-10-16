import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const gcd = (num1, num2) => (num2 === 0 ? Math.abs(num1) : gcd(num2, num1 % num2));

const getTask = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
