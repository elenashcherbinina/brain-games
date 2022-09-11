/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
import {
  sayWelcome,
  greetingUser,
  getQuestion,
  getRandomNumber,
  getAnswer,
  letCongratulate
} from '../src/index.js';

export default (calcGame) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'What is the result of the expression?';
  console.log(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();
    const operator = ['+', '-', '*'];
    const randomOperator = operator[Math.floor(Math.random() * 3)];

    const question = `${getQuestion()}${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
    console.log(question);

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
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`
      );
      return false;
    }
  }
  console.log(`${letCongratulate()}${userName}!`);
  return calcGame;
};
