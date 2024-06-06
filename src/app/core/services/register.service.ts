import registerMapper from '../mappers/register.mapper';
import { IUserRegister } from '../models/user-register.model';
import { urls } from '../resources/url.resource';
import http from './general/http.service';

export const registerService = (credencials: IUserRegister):Promise<number> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  const url = urls.register;
  const body = registerMapper.toApi(credencials);
  return http.post(url, headers,body)
    .then(async (response) => {
      if (response.status === 200) {
        const responseBody = await response.json(); 
        if (responseBody.token) {
          const token = responseBody.token; 
          console.log(token);
        }
      }
      return response.status;
    });
};