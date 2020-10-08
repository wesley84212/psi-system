import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseModule } from './purchase/purchase.module';


@Module({
  imports: [TypeOrmModule.forRoot(), PurchaseModule],
  controllers: [AppController],
  providers: [AppService, PurchaseModule],
})
export class AppModule { }
