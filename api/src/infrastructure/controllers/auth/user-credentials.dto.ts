import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
import { IUserCredentialsDTO } from '../../../domain/ports/auth.port';

class UserCredentialDTO implements IUserCredentialsDTO {
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsNotEmpty()
  address: string;
}

export { UserCredentialDTO };
