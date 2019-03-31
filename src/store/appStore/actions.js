export const actionType = {
  TEST: "TEST"
};

export const test = msg => ({type: actionType.TEST, payload: msg});
