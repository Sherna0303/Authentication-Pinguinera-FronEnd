import { IUserCredentials } from '../models/user-credentials';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const authServiceLogin = (credentials: IUserCredentials): Promise<string> => {
  const url = urls.login;
  // const body = authenticationMapper.toApiLogin(credentials);
  const body = credentials;

  return http.post(url, body)
    .then((response) => response.json())
    .then((response) => {
      return response.token;
    });
};
