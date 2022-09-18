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

export const devisorOfNumber = (num) => {
  const devisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      devisors.push(i);
    }
  }
  return devisors;
};

export const getTheGreatestDevisor = (
  firstRandomNumber,
  secondRandomNumber
) => {
  const devisorsOfFirstNumber = devisorOfNumber(firstRandomNumber);
  const devisorsOfSecondNumber = devisorOfNumber(secondRandomNumber);

  const commonDevisors = [];
  /* eslint-disable-next-line */
  for (const item of devisorsOfFirstNumber) {
    if (devisorsOfSecondNumber.includes(item)) {
      commonDevisors.push(item);
    }
  }

  let theGreatesDevisor = commonDevisors[0];

  for (let i = 1; i < commonDevisors.length; i += 1) {
    if (commonDevisors[i] > theGreatesDevisor) {
      theGreatesDevisor = commonDevisors[i];
    }
  }
  return theGreatesDevisor;
};

export default (runGcd) => {
  sayWelcome();
  const userName = greetingUser();

  const gameRule = 'Find the greatest common divisor of given numbers.';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    getQuestion(question);

    const userAnswer = getAnswer();

    const correctAnswer = getTheGreatestDevisor(
      firstRandomNumber,
      secondRandomNumber
    );
    if (Number(userAnswer) === correctAnswer) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  getCongratulation(userName);

  return runGcd;
};
