import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {
  @Get()
  getUsers() {
    return "I'm Rishi Raj";
  }
  @Get('/use')
  getMe() {
    return { name: 'Rishi', email: 'erishiraj@gmail.cmo' };
  }

  @Post()
  updateData(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    console.log(params);
    return params;
  }

  @Delete('/userId')
  deleteUser(@Param() param: { userId: number }) {
    return param;
  }
}
