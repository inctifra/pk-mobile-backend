import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ResourcesController],
  providers: [ResourcesService],
  imports: [HttpModule]
})
export class ResourcesModule {}
