import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { join } from 'path';
import { PrismaService } from '../prisma/prisma.service';
import { article, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    console.log(process.env.DATABASE_HOST)
    console.log(join(__dirname, '/entities/*{ .ts,.js}'))
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<article[]>{
    const user = await this.prisma.article.findMany()
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
