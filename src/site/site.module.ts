import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteSchema } from './schemas/site.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Block', schema: SiteSchema }])
  ],
  providers: [SiteService],
  controllers: [SiteController]
})
export class SiteModule {}