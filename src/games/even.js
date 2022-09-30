import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getTask = () => {
  const getQuestion = getRandomNumber(1, 100);
  const getCorrectAnswer = getQuestion % 2 === 0 ? 'yes' : 'no';
  return [getQuestion, getCorrectAnswer];
};

const runEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(description, getTask);
};
export default runEven;
