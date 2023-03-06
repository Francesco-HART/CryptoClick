import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../../../domain/models/user';

class UserPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  time_played: Date;

  constructor(user: UserModel) {
    this.id = user._id.toString();
    this.login = user.login;

    this.address = user.address;

    this.time_played = user.time_played;
  }
}

export { UserPresenter };
