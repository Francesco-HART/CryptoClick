import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Get,
  Patch,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../../use-cases/user/create-user.usecase';
import { UpdateUserUseCase } from '../../../use-cases/user/update-user.usecase';
import { CreateUserDTO } from './user.dto';
import { UpdateUserDTO } from './user.dto';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { UserPresenter } from './user.presenter';
import { GetUserUseCase } from '../../../use-cases/user/get-user.usecase';

@ApiTags('users')
@Controller('users')
@ApiResponse({ status: 500, description: 'Internal error' })
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) {}

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // async getUsers(): Promise<UserPresenter[]> {
  //   const users = await this.getUsersUseCase.execute();
  //   return users.map((user) => new UserPresenter(user));
  // }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id): Promise<UserPresenter> {
    const user = await this.getUserUseCase.execute(id);
    return new UserPresenter(user);
  }

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDTO,
  ): Promise<UserPresenter> {
    const user = await this.createUserUseCase.execute(createUserDto);
    return new UserPresenter(user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Param('id') id,
    @Body() dto: UpdateUserDTO,
  ): Promise<UserPresenter> {
    const user = await this.updateUserUseCase.execute(id, dto);
    return new UserPresenter(user);
  }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  // async deleteUser(@Param('id') id): Promise<UserPresenter> {
  //   const user = await this.deleteUserUseCase.execute(id);
  //   return new UserPresenter(user);
  // }
}
