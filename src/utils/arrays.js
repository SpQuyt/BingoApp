/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
/* eslint-disable vars-on-top */
import { TABLE_SIZE } from 'constants/sizes';

const shuffle1DArray = (array) => {
  var currentIndex = array.length; let temporaryValue; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const createEmptyTableArray = () => {
  const emptyTableArray = [];
  for (let row = 0; row < TABLE_SIZE; row++) {
    const rowArray = [];
    for (let col = 0; col < TABLE_SIZE; col++) {
      rowArray.push(null);
    }
    emptyTableArray.push(rowArray);
  }
  return emptyTableArray;
};

const createRandomTableArray = () => {
  // Create a 1D array from 1 to TABLE_SIZE
  const initialized1DArray = [];
  for (var i = 1; i <= TABLE_SIZE * TABLE_SIZE; i++) {
    initialized1DArray.push(i);
  }

  // Shuffle that 1D Array
  const shuffleArray = shuffle1DArray(initialized1DArray);

  // Use that 1D Array to make a new 2D Array and return it
  const result2DArray = [];
  for (let row = 0; row < TABLE_SIZE; row++) {
    const rowArray = [];
    for (let col = 0; col < TABLE_SIZE; col++) {
      rowArray.push(shuffleArray[row * TABLE_SIZE + col]);
    }
    result2DArray.push(rowArray);
  }
  return result2DArray;
};

const ArrayHandler = {
  createEmptyTableArray,
  createRandomTableArray,
};

export default ArrayHandler;
