import readlineSync from 'readline-sync';

export default (userName) => {
  const name = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${name}!`);
  return userName;
};
