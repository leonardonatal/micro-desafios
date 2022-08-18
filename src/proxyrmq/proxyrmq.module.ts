import { Module } from '@nestjs/common';
import { ClientProxySmartRanking } from './client-proxy.service';

@Module({
  providers: [ClientProxySmartRanking],
  exports: [ClientProxySmartRanking],
})
export class ProxyrmqModule {}
