import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IAuthPort } from '../../domain/ports/auth.port';
import { UserModel } from '../../domain/models/user';

@Injectable()
class GetProfileUseCase {
  constructor(private readonly authPort: IAuthPort) {}

  async execute(id: string): Promise<UserModel> {
    if (!id) throw new UnauthorizedException('Unauthorized');
    return await this.authPort.getProfile(id);
  }
}

export { GetProfileUseCase };
