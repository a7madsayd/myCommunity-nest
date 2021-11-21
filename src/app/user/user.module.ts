
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';


@Global()
@Module({
  imports: [
    
    TypeOrmModule.forFeature([]),
  ],
  providers: [
  ],
  controllers: [UserController],
  exports: [
    
  ],
})
export class UserModule {}
