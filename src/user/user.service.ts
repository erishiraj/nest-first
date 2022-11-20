import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Rishi', email: 'erishiraj@gmail.cmo' };
  }

  create(createUserDTO: CreateUserDTO) {
    return createUserDTO;
  }

  update(updateUserDTO: UpdateUserDTO, userId: number) {
    return { ...updateUserDTO, userId };
  }

  getUser(userId: number) {
    return userId;
  }
  delete(userId: number) {
    return userId;
  }
}
