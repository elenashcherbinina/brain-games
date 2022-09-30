import run from '../index.js';
import getRandomNumber from '../utils.js';

export const devisorOfNumber = (num) => {
  const devisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      devisors.push(i);
    }
  }
  return devisors;
};

export const getTheGreatestDevisor = (firstRandomNumber, secondRandomNumber) => {
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

export const getTask = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const getQuestion = `${firstRandomNumber} ${secondRandomNumber}`;

  const getCorrectAnswer = String(getTheGreatestDevisor(firstRandomNumber, secondRandomNumber));
  return [getQuestion, getCorrectAnswer];
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  run(description, getTask);
};
export default runGcd;
