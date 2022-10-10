import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const getTask = () => {
  const question = getRandomNumber(minRange, maxRange);
  const devisors = [];
  for (let i = 2; i <= question; i += 1) {
    if (question % i === 0) {
      devisors.push(i);
    }
  }
  let correctAnswer;
  if (devisors.length === 1 && devisors[0] === question) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
