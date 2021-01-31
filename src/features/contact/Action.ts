export enum ContactMeType {
  Name = 'name',
  Email = 'email',
  Website = 'website',
  Message = 'message',
}

export interface ContactMeState {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export type ContactMeAction = { type: string; payload: string };

export const thunk = (id: string, data: string): ContactMeAction => {
  return { type: id, payload: data };
};
