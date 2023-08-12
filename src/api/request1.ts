import axios, { AxiosResponse } from 'axios';

const envMode = process.env.NODE_ENV;
const publicUrl = envMode === 'development' ? '/' : '/api';



/**
 * 封装请求
 * @param method {string} 请求类型，必填
 * @param url {string} 请求地址，必填
 * @param params {Object} 参数，非必填
 * @returns {Promise<HttpResponse<T>>}
 **/
export const http = <T = any>(method: string, url: string, params: any = {}, loading?: any): Promise<HttpResponse<T>> => {
  return new Promise<HttpResponse<T>>((resolve, reject) => {
    axios({
      method: method,
      url: publicUrl + url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: params,
    })
      .then((res: AxiosResponse<T>) => {
        if (res.status === 200) {
          resolve((res as any).data);
        } else {
          console.error('axiosThen', res);
          reject(res);
        }
      })
      .catch((err: any) => {
        console.error('axiosCatch', err);
        reject(err);
        // ElMessage({ message: "提交失败", showClose: true, center: true, duration: 2000, type:'error' });
        // !loadingDisable&&hideLoading()
      });
  });
};

// 封装fetch
export const fetchLocl = async (method: string, url: string, params?: any): Promise<any> => {
  const opts: RequestInit = {
    method,
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
  };
  if (method === 'post') {
    opts.body = JSON.stringify(params);
  }
  return await fetch(url, opts).then((res) => {
    return res.json();
  });
  // .then((res) => { return res; })
  // .catch((error) => { console.error(error) })
};