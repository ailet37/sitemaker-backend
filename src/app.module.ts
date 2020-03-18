import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteModule } from './site/site.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION), SiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
