import { ProxyrmqModule } from './../proxyrmq/proxyrmq.module';
import { Module } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { DesafiosController } from './desafios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafioSchema } from './interfaces/desafio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desafio', schema: DesafioSchema }]),
    ProxyrmqModule,
  ],
  providers: [DesafiosService],
  controllers: [DesafiosController],
})
export class DesafiosModule {}
