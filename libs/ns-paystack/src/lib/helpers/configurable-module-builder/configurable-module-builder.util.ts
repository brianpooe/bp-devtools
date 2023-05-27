import { ConfigurableModuleBuilder } from '@nestjs/common';
import { NsPaystackConfigModel } from '@bp-devtools/ns-paystack';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
    new ConfigurableModuleBuilder<NsPaystackConfigModel>().build();
