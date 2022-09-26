/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getQuestionAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[Math.floor(Math.random() * 3)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  let correctAnswer = 0;
  switch (randomOperator) {
    case '+':
      correctAnswer = String(firstRandomNumber + secondRandomNumber);
      break;
    case '*':
      correctAnswer = String(firstRandomNumber * secondRandomNumber);
      break;
    case '-':
      correctAnswer = String(firstRandomNumber - secondRandomNumber);
      break;
    default:
      console.log('No operator');
  }
  return [question, correctAnswer];
};

export default (runCalcGame) => {
  const gameRule = 'What is the result of the expression?';

  run(gameRule, getQuestionAndAnswer);
  return runCalcGame;
};
