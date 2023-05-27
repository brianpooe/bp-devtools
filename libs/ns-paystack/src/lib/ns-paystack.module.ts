import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './config.module-definition';
import { NsPaystackService } from './ns-paystack.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                timeout: configService.get('HTTP_TIMEOUT'),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [NsPaystackService],
    exports: [NsPaystackService],
})
export class NsPaystackModule extends ConfigurableModuleClass {}
