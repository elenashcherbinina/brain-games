import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 5;
const minLength = 0;
const maxLength = 9;

const getProgression = (start, step, progressionLength) => {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getTask = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progressionLength = 10;
  const progression = getProgression(start, step, progressionLength);
  const missed = getRandomNumber(minLength, maxLength);
  const correctAnswer = String(progression[missed]);
  progression[missed] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(description, getTask);
};
