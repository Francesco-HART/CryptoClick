import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): { _id: string; address: string } => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);

export { GetUser };
