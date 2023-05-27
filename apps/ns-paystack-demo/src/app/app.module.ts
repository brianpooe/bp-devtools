import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NsPaystackModule } from '@bp-devtools/ns-paystack';

@Module({
  imports: [NsPaystackModule.registerAsync({
    useFactory: () => {
      return {
        secretKey: 'test'
      };
    }
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
