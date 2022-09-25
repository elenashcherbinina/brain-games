/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */

import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default (runEvenGame) => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  run(gameRule, getQuestionAndAnswer());
  return runEvenGame;
};
