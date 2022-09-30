import run from '../index.js';
import getRandomNumber from '../utils.js';

export const getTask = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[Math.floor(Math.random() * 3)];
  const getQuestion = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  let getCorrectAnswer = 0;
  switch (randomOperator) {
    case '+':
      getCorrectAnswer = String(firstRandomNumber + secondRandomNumber);
      break;
    case '*':
      getCorrectAnswer = String(firstRandomNumber * secondRandomNumber);
      break;
    case '-':
      getCorrectAnswer = String(firstRandomNumber - secondRandomNumber);
      break;
    default:
      console.log('No operator');
  }
  return [getQuestion, getCorrectAnswer];
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  run(description, getTask);
};
export default runCalc;
