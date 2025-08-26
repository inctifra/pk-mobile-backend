import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesModule } from './resources/resources.module';
import { DatabasesModule } from './databases/databases.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ResourcesModule, DatabasesModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
