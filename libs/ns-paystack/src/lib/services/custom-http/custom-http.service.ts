import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MODULE_OPTIONS_TOKEN, PsConfigModel } from '../../models';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomHttpService extends HttpService {
  axiosRequestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.appConfigService.secretKey}`
    }
  };

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly appConfigService: PsConfigModel,
    private readonly configService: ConfigService
  ) {
    super();
    this.axiosRef.defaults.timeout = configService.get('HTTP_TIMEOUT');
    this.axiosRef.defaults.baseURL = configService.get('BASE_URL');
  }

  override get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse<T>> {
    return super.get<T>(url, {
      ...config,
      headers: this.axiosRequestConfig.headers
    });
  }

  override post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse<T>> {
    return super.post<T>(url, data, {
      ...config,
      headers: this.axiosRequestConfig.headers
    });
  }
}
