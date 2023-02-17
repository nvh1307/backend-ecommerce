import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Film } from './entities/film/film.entity';
import { FilmService } from './film/film.service';
import { UserModule } from './user/user.module';

// require('dotenv').config();
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'root',
      password: 'test',
      database: 'ecommerce',
      entities: [],
      synchronize: true,
    }),
    UserModule,
    TypeOrmModule.forFeature([Film]),
  ],
  controllers: [AppController],
  providers: [AppService,FilmService],
})
export class AppModule {}
