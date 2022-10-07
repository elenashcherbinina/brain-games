import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const getDevisors = (number) => {
  const devisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      devisors.push(i);
    }
  }
  return devisors;
};

const getCommonDevisors = (number1, number2) => {
  const devisorsNumber1 = getDevisors(number1);
  const devisorsNumber2 = getDevisors(number2);
  const commonDevisors = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const devisor of devisorsNumber1) {
    if (devisorsNumber2.includes(devisor)) {
      commonDevisors.push(devisor);
    }
  }
  return commonDevisors;
};

const getGreatestDevisor = (number1, number2) => {
  const commonDevisors = getCommonDevisors(number1, number2);
  let greatestDevisor = commonDevisors[0];
  for (let i = 1; i < commonDevisors.length; i += 1) {
    if (commonDevisors[i] > greatestDevisor) {
      greatestDevisor = commonDevisors[i];
    }
  }
  return greatestDevisor;
};

const getTask = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatestDevisor(number1, number2));
  return [question, correctAnswer];
};

export default () => run(description, getTask);
