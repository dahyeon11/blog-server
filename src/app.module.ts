import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
    ignoreEnvFile: process.env.NODE_ENV === 'prod', // prod배포에는 aws설정 사용
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
