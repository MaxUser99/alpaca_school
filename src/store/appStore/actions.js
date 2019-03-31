export const actionType = {
  TEST: "TEST",
  PRINT_ERROR: "PRINT_ERROR"
};

export const test = msg => ({type: actionType.TEST, payload: msg});
export const printError = msg => ({type: actionType.PRINT_ERROR, payload: msg});
