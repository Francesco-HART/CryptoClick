import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserModel } from '../../domain/models/user';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
class UserEntity implements UserModel {
  @ApiProperty()
  _id: Types.ObjectId;

  @Prop({
    type: String,
    unique: true,
    lowercase: true,
    sparse: true,
    trim: true,
  })
  login: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  address: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now(),
  })
  time_played: Date;
}

type UserDocument = UserEntity & Document;

const UserSchema = SchemaFactory.createForClass(UserEntity);

export { UserEntity, UserDocument, UserSchema };
