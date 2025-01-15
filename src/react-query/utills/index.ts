export const startsWith = (startingChar: string | number, dataToCheck?: string | number) => {
  if (!dataToCheck) {
    return false;
  }

  return dataToCheck.toString().charAt(0) === startingChar.toString();
};

export const isServerError = (statusCode?: number) => {
  return startsWith(5, statusCode);
};

export const isClientError = (statusCode?: number) => {
  return startsWith(4, statusCode);
};
