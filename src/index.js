/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
import readlineSync from 'readline-sync';

const run = (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let countRightAnswers = 1; countRightAnswers <= 3; ) {
    const questionAndAnswer = getQuestionAndAnswer();
    const question = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return run;
};

export default run;
