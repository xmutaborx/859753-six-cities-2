import {NAMES_OF_MONTHS} from '../constants/constants';

export const correctRating = (rating) => rating * 20;

export const dateTime = (date) => {
  const correctDate = new Date(date);
  const numberOfMonth = correctDate.getMonth();
  const year = correctDate.getFullYear();
  return `${NAMES_OF_MONTHS[numberOfMonth]} ${year}`;
};
