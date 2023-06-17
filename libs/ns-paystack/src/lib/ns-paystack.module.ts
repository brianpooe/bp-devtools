import { Module } from '@nestjs/common';
import { PsTransactionSplitService, PsTransactionsService } from './services';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigurableModuleClass } from './helpers';
import { CustomHttpService } from './services/custom-http/custom-http.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    PsTransactionsService,
    PsTransactionSplitService,
    ConfigService,
    CustomHttpService
  ],
  exports: [PsTransactionsService, PsTransactionSplitService]
})
export class NsPaystackModule extends ConfigurableModuleClass {}
