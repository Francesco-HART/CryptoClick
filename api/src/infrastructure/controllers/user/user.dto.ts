import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEthereumAddress,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  ICreateUserDto,
  IUpdateUserDTO,
} from '../../../domain/ports/user.port';

class CreateUserDTO implements ICreateUserDto {
  @ApiProperty()
  @IsEthereumAddress()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  login: string;
}

class UpdateUserDTO implements IUpdateUserDTO {
  @IsString()
  @IsOptional()
  login?: string;

  @IsDate()
  @IsOptional()
  time_played?: Date;
}

export { CreateUserDTO, UpdateUserDTO };
