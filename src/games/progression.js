import run from '../index.js';
import { getRandomNumber, getProgression } from '../utils.js';

const description = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 5;
const minLength = 1;
const maxLength = 9;

const getTask = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(start, step);
  const missed = getRandomNumber(minLength, maxLength);
  const correctAnswer = String(progression[missed]);
  progression[missed] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => run(description, getTask);
