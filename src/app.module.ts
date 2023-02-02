import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Detail } from './users/entities/detail.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entity';
import { Tag } from './blog/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'postgre',
    database : 'app_nest',
    entities: [User,Detail,Blog,Tag],
    migrations: [],
    synchronize : true,
    logging:true
  }),UsersModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
