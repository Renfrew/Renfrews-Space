export enum ContactMeType {
  Name = 'name',
  Email = 'email',
  Company = 'company',
  Website = 'website',
  Message = 'message',
  ErrorState = 'error',
  SuccessState = 'success',
  CloseSnackbar = 'closeBar',
}

export interface ContactMeState {
  name: string;
  email: string;
  company?: string;
  website?: string;
  message: string;
  feedback: string;
  open: boolean;
  severity: 'success' | 'error';
}

/**
 * Action Types
 */
export interface ContactMeBaseAction {
  type: string;
}

export interface FormAction extends ContactMeBaseAction {
  payload: string;
}
export type SuccessStateAction = ContactMeBaseAction;
export interface ErrorStateAction extends ContactMeBaseAction {
  payload: string;
}
export type CloseStateAction = ContactMeBaseAction;

export type ContactMeAction =
  | FormAction
  | SuccessStateAction
  | ErrorStateAction
  | CloseStateAction;

/**
 * Action that is used to update form
 * @param id
 * @param data
 */
export const changeForm = (id: string, data: string): FormAction => {
  return { type: id, payload: data };
};

/**
 * Action which is called when the "Contact me" form successfully send
 */
export const sendSuccess = (): SuccessStateAction => {
  return { type: ContactMeType.SuccessState };
};

/**
 * Action which is called when the "Contact me" form fail to send
 * @param err
 */
export const sendError = (err: string): ErrorStateAction => {
  return {
    type: ContactMeType.ErrorState,
    payload: err,
  };
};

/**
 * Action is called when the Snackbar need to be close
 */
export const closeState = (): CloseStateAction => {
  return { type: ContactMeType.CloseSnackbar };
};
