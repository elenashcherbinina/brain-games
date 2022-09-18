/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import {
  sayWelcome,
  greetingUser,
  getGameRule,
  getQuestion,
  getRandomNumber,
  getAnswer,
  getPositiveFeedback,
  getNegativeFeedback,
  getCongratulation
} from '../index.js';

export const getProgression = (randomNumber, randomForProgression) => {
  const progressionString = [];
  let count = 0;
  for (let item = randomNumber; count < 10; item += randomForProgression) {
    progressionString.push(item);
    count += 1;
  }
  return progressionString;
};

export const getCorrectAnswer = (
  randomNumber,
  randomForProgression,
  randomPlace
) => {
  const progressionString = getProgression(randomNumber, randomForProgression);
  const correctAnswer = progressionString[randomPlace];
  return correctAnswer;
};

export const getProgressionForQuestion = (
  randomNumber,
  randomForProgression,
  randomPlace
) => {
  const progressionString = getProgression(randomNumber, randomForProgression);
  progressionString[randomPlace] = '..';
  return progressionString.join(' ');
};

export default (runProgression) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'What number is missing in the progression?';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = getRandomNumber();
    const randomForProgression = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    const randomPlace = Math.floor(Math.random() * 10);

    const correctAnswer = getCorrectAnswer(
      randomNumber,
      randomForProgression,
      randomPlace
    );
    const question = getProgressionForQuestion(
      randomNumber,
      randomForProgression,
      randomPlace
    );
    getQuestion(question);

    const userAnswer = getAnswer();

    if (Number(userAnswer) === correctAnswer) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  getCongratulation(userName);

  return runProgression;
};
