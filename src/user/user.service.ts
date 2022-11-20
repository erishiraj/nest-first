import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDTO: CreateUserDTO) {
    return this.userRepository.save(createUserDTO);
  }

  update(updateUserDTO: UpdateUserDTO, userId: number) {
    return this.userRepository.update(userId, updateUserDTO);
  }

  getUser(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
