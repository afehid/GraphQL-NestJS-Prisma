import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pet } from './entities/pet.entity'; // Ensure Pet and Owner types are imported
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async getAllPets(): Promise<Pet[]> {
    return this.prisma.pet.findMany({
      include: { owner: true },
    });
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    return this.prisma.pet.create({ data: createPetInput });
  }

  async findOne(id: number): Promise<Pet> {
    return this.prisma.pet.findUnique({
      where: { id },
      include: { owner: true }, // Include the related owner object
    });
  }
}
