/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
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

export default (runCalc) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'What is the result of the expression?';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();
    const operator = ['+', '-', '*'];
    const randomOperator = operator[Math.floor(Math.random() * 3)];

    const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
    getQuestion(question);

    const userAnswer = getAnswer();

    let correctAnswer = 0;
    switch (randomOperator) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      default:
        console.log('No operator');
    }

    if (Number(userAnswer) === correctAnswer) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  getCongratulation(userName);

  return runCalc;
};
