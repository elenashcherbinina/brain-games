export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

export const getProgression = (start, step) => {
  const progression = [];
  let countElement = 0;
  const maxElements = 10;

  for (let number = start; countElement < maxElements; number += step) {
    progression.push(number);
    countElement += 1;
  }
  return progression;
};
