import { ContactMeState, ContactMeAction } from './Action';

export { thunk, ContactMeType } from './Action';
export type { ContactMeState, ContactMeAction };

export const reducer = (
  state: ContactMeState,
  action: ContactMeAction
): ContactMeState => {
  return { ...state, [action.type]: action.payload };
};
