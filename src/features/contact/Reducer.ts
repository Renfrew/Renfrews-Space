import {
  ContactMeType,
  ContactMeState,
  ContactMeAction,
  FormAction,
  ErrorStateAction,
} from './Action';

export {
  changeForm,
  sendSuccess,
  sendError,
  closeState,
  ContactMeType,
} from './Action';
export type { ContactMeState, ContactMeAction };

export const reducer = (
  state: ContactMeState,
  action: ContactMeAction
): ContactMeState => {
  const actionType = action.type;

  // Define type guards
  function isErrorStateAction(
    action: ContactMeAction
  ): action is ErrorStateAction {
    return action.type === ContactMeType.ErrorState;
  }

  function isFormAction(action: ContactMeAction): action is FormAction {
    return (
      action.type !== ContactMeType.ErrorState &&
      action.type !== ContactMeType.SuccessState &&
      action.type !== ContactMeType.CloseSnackbar
    );
  }

  switch (actionType) {
    case ContactMeType.SuccessState:
      return {
        ...state,
        feedback: 'Thank you for contacting me! I will reply you back soon!',
        open: true,
        severity: 'success',
      };
    case ContactMeType.ErrorState:
      if (isErrorStateAction(action)) {
        return {
          ...state,
          feedback: action.payload,
          open: true,
          severity: 'error',
        };
      }
      break;
    case ContactMeType.CloseSnackbar:
      return {
        ...state,
        open: false,
      };
    default:
      if (isFormAction(action)) {
        return { ...state, [action.type]: action.payload };
      }
  }

  return state;
};
