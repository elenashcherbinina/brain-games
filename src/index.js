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

export const getQuestion = () => {
  const question = 'Question: ';
  return question;
};

export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const letCongratulate = () => {
  const congratulation = 'Congratulations, ';
  return congratulation;
};
