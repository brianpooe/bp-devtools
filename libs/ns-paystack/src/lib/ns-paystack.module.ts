import { Module } from '@nestjs/common';
import { NsPaystackService } from './services/ns-paystack.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurableModuleClass } from './helpers';

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                timeout: configService.get('HTTP_TIMEOUT'),
                baseURL: configService.get('BASE_URL')
            }),
            inject: [ConfigService]
        })
    ],
    providers: [NsPaystackService, ConfigService],
    exports: [NsPaystackService]
})
export class NsPaystackModule extends ConfigurableModuleClass {}
