import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  private mapToEndity(user: any): User {
    return {
      id: user.id,
      document: user.document,
      password: user.password,
      name: user.name,
      phone: user.phone,
      email: user.email,
      status: user.status,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        document: createUserDto.document,
        password: createUserDto.password,
        name: createUserDto.name,
        phone: createUserDto.phone,
        email: createUserDto.email,
        status: createUserDto.status,
      },
    });

    return this.mapToEndity(user);
  }

  async findAll(): Promise<User[]> {
    const user = await this.prisma.user.findMany();
    return user.map((user) => this.mapToEndity(user));
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    return this.mapToEndity(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return user;
  }

  async remove(id: string) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return this.mapToEndity(user);
  }
}
