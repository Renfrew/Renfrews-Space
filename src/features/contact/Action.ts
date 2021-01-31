export enum ContactMeType {
  Name = 'name',
  Email = 'email',
  Company = 'company',
  Website = 'website',
  Message = 'message',
}

export interface ContactMeState {
  name: string;
  email: string;
  company?: string;
  website?: string;
  message: string;
}

export type ContactMeAction = { type: string; payload: string };

export const thunk = (id: string, data: string): ContactMeAction => {
  return { type: id, payload: data };
};
