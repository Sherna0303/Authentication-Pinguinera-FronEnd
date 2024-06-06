import { environment } from '../environment/environment';

export const urls = {
  login: `${environment.apiUrl}/auth/login`,
  register: `${environment.apiUrl}/auth/register`,
  home: `${environment.urlComerce}/home`,
  loan: `${environment.urlLoan}/loan`,
  admin: `${environment.urlAdmin}/admin`,
};