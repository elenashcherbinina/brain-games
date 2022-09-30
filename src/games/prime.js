import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getTask = () => {
  const getQuestion = getRandomNumber(1, 100);

  const devisors = [];
  for (let i = 2; i <= getQuestion; i += 1) {
    if (getQuestion % i === 0) {
      devisors.push(i);
    }
  }
  let getCorrectAnswer;
  if (devisors.length === 1 && devisors[0] === getQuestion) {
    getCorrectAnswer = 'yes';
  } else {
    getCorrectAnswer = 'no';
  }
  return [getQuestion, getCorrectAnswer];
};

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(description, getTask);
};
export default runPrime;
