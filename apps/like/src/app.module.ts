import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ObjectModule } from './object/object.module';
import { TypeModule } from './type/type.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ObjectModule,
    TypeModule,
    UserModule,
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}