/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable space-in-parens */
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
} from '../src/index.js';

export const getPrimeNumber = (randomNumber) => {
  const devisors = [];
  for (let i = 2; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      devisors.push(i);
    }
  }
  let correctAnswer;
  if (devisors.length === 1 && devisors[0] === randomNumber) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export default (primeGame) => {
  sayWelcome();
  const userName = greetingUser();

  const gameRule =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = getRandomNumber();

    const question = `${randomNumber}`;
    getQuestion(question);

    const userAnswer = getAnswer();

    const correctAnswer = getPrimeNumber(randomNumber);

    if (userAnswer === correctAnswer) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  getCongratulation(userName);

  return primeGame;
};
