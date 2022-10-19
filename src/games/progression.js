import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 5;
const limitLength = 10;

const buildProgression = (start, step, length) => {
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getTask = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = buildProgression(start, step, limitLength);
  const hideIndex = getRandomIndex(progression);
  const correctAnswer = String(progression[hideIndex]);
  progression[hideIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
