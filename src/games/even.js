import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => number % 2 === 0;

const getTask = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(`${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
