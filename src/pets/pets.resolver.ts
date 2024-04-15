// src/pets/pets.resolver.ts
import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) { }

  @Query(() => [Pet])
  async pets(): Promise<Pet[]> {
    return this.petsService.getAllPets();
  }

  @Mutation(() => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }

  @Query(() => Pet)
  async getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @ResolveField(() => Owner)
  petOwner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.owner_id)
  }
}
