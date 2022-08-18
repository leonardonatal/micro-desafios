import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config';
import { ClientProxySmartRanking } from './proxyrmq/client-proxy.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.x0v8x.mongodb.net/srdesafios?retryWrites=true&w=majority',
    ),
    DesafiosModule,
    PartidasModule,
    ProxyrmqModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [ClientProxySmartRanking],
})
export class AppModule {}
