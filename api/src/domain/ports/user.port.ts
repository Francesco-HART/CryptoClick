import { UserModel } from '../models/user';

abstract class ICreateUserDto {
  address: string;
  login?: string;
}

abstract class IUpdateUserDTO {
  login?: string;
  time_played?: Date;
}

abstract class IUserPort {
  abstract create(createUserDTO: ICreateUserDto): Promise<UserModel>;
  abstract fetch(): Promise<UserModel[]>;
  abstract getOneById(id: string): Promise<UserModel>;
  abstract getOneByAddress(address: string): Promise<UserModel>;
  abstract updateUser(userId: string, dto: IUpdateUserDTO): Promise<UserModel>;
  abstract deleteUser(userId: string): Promise<UserModel>;
}
export { IUserPort, ICreateUserDto, IUpdateUserDTO };
