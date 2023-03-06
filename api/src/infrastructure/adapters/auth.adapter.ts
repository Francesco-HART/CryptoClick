import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuthPort } from '../../domain/ports/auth.port';
import { UserDocument, UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/domain/models/user';

class AuthAdapter implements IAuthPort {
  constructor(
    @InjectModel(UserEntity.name)
    private readonly userEntity: Model<UserDocument>,
  ) {}

  async verifyIfPasswordIsValid(
    hashedAddress: string,
    address: string,
  ): Promise<boolean> {
    return await bcrypt.compare(address, hashedAddress);
  }

  login(jwtService: JwtService, dto: UserModel): string {
    const payload = { address: dto.address, _id: dto._id };
    return jwtService.sign(payload);
  }

  async getProfile(id: string): Promise<UserModel> {
    return await this.userEntity.findById(id);
  }
}

export { AuthAdapter };
