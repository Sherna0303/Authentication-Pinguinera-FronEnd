import registerMapper from '../mappers/register.mapper';
import { IUserRegister } from '../models/user-register.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const registerService = (credencials: IUserRegister):Promise<number | undefined> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  
  const url = urls.register;
  const body = registerMapper.toApi(credencials);
  return http.post(url, headers,body)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json(); 
        if (responseBody.Token) {
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

