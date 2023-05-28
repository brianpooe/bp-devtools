import { ConfigurableModuleBuilder } from '@nestjs/common';
import { PsConfigModel } from '../../models';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
    new ConfigurableModuleBuilder<PsConfigModel>().build();
