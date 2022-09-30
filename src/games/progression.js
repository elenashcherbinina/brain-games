import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getTask = () => {
  const randomNumber = getRandomNumber(1, 100);
  const randomForProgression = getRandomNumber(1, 5);
  const progressionString = [];
  let count = 0;
  for (let item = randomNumber; count < 10; item += randomForProgression) {
    progressionString.push(item);
    count += 1;
  }

  const randomPlace = getRandomNumber(1, 9);
  const getCorrectAnswer = String(progressionString[randomPlace]);

  progressionString[randomPlace] = '..';
  const getQuestion = progressionString.join(' ');

  return [getQuestion, getCorrectAnswer];
};

const runProgression = () => {
  const description = 'What number is missing in the progression?';
  run(description, getTask);
};
export default runProgression;
