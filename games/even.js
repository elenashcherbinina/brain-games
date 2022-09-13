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
} from '../src/index.js';

export default (evenGame) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = getRandomNumber();

    const question = randomNumber;
    getQuestion(question);

    const userAnswer = getAnswer();

    const evenNumber = randomNumber % 2 === 0;
    let correctAnswer = 'yes';
    if (
      (evenNumber && userAnswer === correctAnswer) ||
      (!evenNumber && userAnswer !== correctAnswer)
    ) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else if (evenNumber && userAnswer !== correctAnswer) {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      countRightAnswers = 0;
    } else if (!evenNumber && userAnswer === correctAnswer) {
      correctAnswer = 'no';
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      countRightAnswers = 0;
    }
  }
  getCongratulation(userName);

  return evenGame;
};
