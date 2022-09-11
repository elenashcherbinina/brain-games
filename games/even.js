/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import {
  sayWelcome,
  greetingUser,
  getQuestion,
  getRandomNumber,
  getAnswer,
  letCongratulate
} from '../src/index.js';

export default (brainEven) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = getRandomNumber();

    const question = `${getQuestion()}${randomNumber}`;
    console.log(question);

    const userAnswer = getAnswer();

    const evenNumber = randomNumber % 2 === 0;
    if (
      (evenNumber && userAnswer === 'yes') ||
      (!evenNumber && userAnswer === 'no')
    ) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else if (evenNumber && userAnswer !== 'yes') {
      const noFeedback = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
      console.log(noFeedback);
      countRightAnswers = 0;
    } else if (!evenNumber && userAnswer !== 'no') {
      const yesFeedback = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
      console.log(yesFeedback);
      countRightAnswers = 0;
    }
  }
  console.log(`${letCongratulate()}${userName}!`);

  return brainEven;
};
