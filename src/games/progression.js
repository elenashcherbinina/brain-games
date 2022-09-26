/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const randomForProgression = getRandomNumber(1, 5);
  const progressionString = [];
  let count = 0;
  for (let item = randomNumber; count < 10; item += randomForProgression) {
    progressionString.push(item);
    count += 1;
  }

  const randomPlace = getRandomNumber(1, 9);
  const correctAnswer = String(progressionString[randomPlace]);

  progressionString[randomPlace] = '..';
  const question = progressionString.join(' ');

  return [question, correctAnswer];
};

export default (runProgressionGame) => {
  const gameRule = 'What number is missing in the progression?';
  run(gameRule, getQuestionAndAnswer);
  return runProgressionGame;
};
