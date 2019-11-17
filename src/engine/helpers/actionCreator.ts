export interface Action {
  type: string,
  payload: any,
}

export function actionCreator(actionType: string, actionPayload: any): Action {
  return {
    type: actionType,
    payload: actionPayload,
  };
}
