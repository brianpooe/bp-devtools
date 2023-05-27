import { ConfigurableModuleBuilder } from '@nestjs/common';
import { NsPaystackConfigModel } from './ns-paystack-config.model';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<NsPaystackConfigModel>().build();
