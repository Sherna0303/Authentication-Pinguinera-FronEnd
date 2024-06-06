import { IUserCredentials } from '../models/user-credentials';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

interface LoginResponse {
  token: string;
  statusCode: number;
}

export const authServiceLogin = (credentials: IUserCredentials): Promise<LoginResponse> => {
  const url = urls.login;
  // const body = authenticationMapper.toApiLogin(credentials);
  const body = credentials;

  return http.post(url, body)
    .then((response) => {
      const { status } = response;
      return response.json().then((data) => ({
        token: data.token,
        statusCode: status,}));

    });
};
