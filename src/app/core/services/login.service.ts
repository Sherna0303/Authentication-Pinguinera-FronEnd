import { IUserCredentials } from '../models/user-credentials';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

const headers: HeadersInit = {
  'Content-Type': 'application/json'
};

export const AuthServiceLogin = async (credentials: IUserCredentials): Promise<number | undefined> => {
  const url = urls.login;
  // const body = authenticationMapper.toApiLogin(credentials);
  const body = credentials;

  return http.post(url, headers, body)
    .then(async (response) => {

      if (response.status === 200) {
        const responseBody = await response.json();
        if (responseBody.Token) {

          alert('Se ha iniciado correctamente sesión');

          const token = responseBody.Token;
          const responseHandlers: { [key: string]: () => void } = {
            READER: () => window.location.replace(urls.home + '?token=' + token),
            SUPPLIER: () => window.location.replace(urls.loan + '?token=' + token),
            ASSISTANT: () => window.location.replace(urls.provider + '?token=' + token),
            ADMIN: () => window.location.replace(urls.admin + '?token=' + token),
          };

          const handleResponse = responseHandlers[responseBody.Role];
          handleResponse();
          return;
        }
      }
      return response.status;
    });
};

