import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from '../../domain/models/user';
import { ILoginDTO } from '../../domain/ports/auth.port';
import { IUserPort } from '../../domain/ports/user.port';

@Injectable()
class ValidateCredentialsUseCase {
  constructor(private readonly userPort: IUserPort) {}

  async execute(dto: ILoginDTO): Promise<UserModel> {
    const user = await this.userPort.getOneByAddress(dto.address);

    if (!user) {
      throw new UnauthorizedException('Invalid Address');
    }

    return user;
  }
}

export { ValidateCredentialsUseCase };
