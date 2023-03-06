import { IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { ILoginDTO } from '../../../domain/ports/auth.port';

class LoginDTO implements ILoginDTO {
  @IsNotEmpty()
  @IsEthereumAddress()
  address: string;
}

export { LoginDTO };
