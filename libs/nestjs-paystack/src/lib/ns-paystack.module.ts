import { Module } from '@nestjs/common';
import {
  PsTransactionSplitService,
  PsTransactionsService,
  PsVerificationService
} from './services';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurableModuleClass } from './helpers';
import { CustomHttpService } from './services/custom-http/custom-http.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    ConfigService,
    CustomHttpService,
    PsTransactionSplitService,
    PsTransactionsService,
    PsVerificationService
  ],
  exports: [
    PsTransactionSplitService,
    PsTransactionsService,
    PsVerificationService
  ]
})
export class NsPaystackModule extends ConfigurableModuleClass {}
