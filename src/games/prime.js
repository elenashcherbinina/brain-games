/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable space-in-parens */
import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);

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

export default (runPrimeGame) => {
  const gameRule =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  run(gameRule, getQuestionAndAnswer);
  return runPrimeGame;
};
