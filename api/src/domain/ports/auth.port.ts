import { Types } from 'mongoose';
import { UserModel } from '../models/user';

interface ILoginDTO {
  address: string;
}

interface IUserCredentialsDTO {
  _id: Types.ObjectId;
  address: string;
}

abstract class IAuthPort {
  abstract login(jwtService: any, dto: UserModel): string;
  abstract getProfile(id: string): Promise<UserModel>;

  abstract verifyIfPasswordIsValid(
    hashedPassword: string,
    password: string,
  ): Promise<boolean>;
}

export { IAuthPort, ILoginDTO, IUserCredentialsDTO };
