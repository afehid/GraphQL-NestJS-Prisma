import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) { }

  create(createOwnerInput: CreateOwnerInput) {
    return this.prisma.owner.create({ data: createOwnerInput });
  }

  findAll() {
    return this.prisma.owner.findMany();
  }

  findOne(id: number) {
    return this.prisma.owner.findUnique({ where: { id } });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
