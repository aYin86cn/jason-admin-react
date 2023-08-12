import http,{ fetchLocl } from "./request";

interface ApiRes<T = any> {
  data: T;
  status: number;
}


export const httpGetMap = (url: string, params: any): Promise<ApiRes> => { 
  return fetchLocl("get", url + params); 
};

export const httpNavMenu = (): Promise<HttpLoginRes> => http.post('mock/navMenu');

export const httpCaptcha = (): Promise<HttpCaptchaRes> =>http.get('mock/captcha')

// export const httpCaptcha = (): Promise<CaptchaAPIRes>=>{
//   return http("post", 'mock/captcha')
// }