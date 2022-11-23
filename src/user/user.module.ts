import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserMiddleware } from './user.middleware';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(UserMiddleware).forRoutes({path: 'user', method: RequestMethod.GET})
    consumer.apply(UserMiddleware).forRoutes('user');
  }
}
