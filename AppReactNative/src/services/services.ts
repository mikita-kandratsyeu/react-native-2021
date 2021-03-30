import { unnecessarySymbols } from '../constans';

export const removeUnnecessarySymbols = (str: string): string => {
  let copyString: string = str;

  unnecessarySymbols.forEach(item => {
    copyString = copyString.replace(item, '');
  });

  return copyString.replace(/\s+/g, ' ').trim();
};

export const getTruncatedString = (originString: string, maxlength: number) => {
  if (originString.length > maxlength) {
    return `${originString.substring(0, maxlength)}...`;
  }

  return originString;
};

export const getCapitalizeWord = (word: string): string =>
  `${word.charAt(0).toUpperCase() + word.slice(1)}`;
