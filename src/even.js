/* eslint-disable comma-dangle */
import readlineSync from 'readline-sync';

// Welcome
console.log('Welcome to the Brain Games!');

// evenGame
export default (evenGame) => {
  const userName = readlineSync.question('May I have your name?  ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);

  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Question:', randomNumber);
    const answer = readlineSync.question('Your answer: ');

    const evenNumber = randomNumber % 2 === 0;

    if ((evenNumber && answer === 'yes') || (!evenNumber && answer === 'no')) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else if (evenNumber && answer !== 'yes') {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`
      );
      countRightAnswers = 0;
    } else if (!evenNumber && answer !== 'no') {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`
      );
      countRightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return evenGame;
};
