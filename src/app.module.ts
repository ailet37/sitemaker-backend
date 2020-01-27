import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteModule } from './site/site.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'), SiteModule
  ],
  // imports: [SiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
