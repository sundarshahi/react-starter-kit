import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const startsWith = (startingChar: string | number, dataToCheck?: string | number) => {
  if (!dataToCheck) {
    return false;
  }

  return dataToCheck.toString().charAt(0) === startingChar.toString();
};
