import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);
};

export const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
  return userName;
};

export const getGameRule = (gameRule) => {
  console.log(gameRule);
};

export const getQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getPositiveFeedback = () => {
  const positiveFeedback = 'Correct!';
  console.log(positiveFeedback);
};

export const getNegativeFeedback = (userAnswer, correctAnswer, userName) => {
  const negativeFeedback = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  console.log(negativeFeedback);
};

export const getCongratulation = (userName) => {
  console.log(`Congratulations,${userName}!`);
};
