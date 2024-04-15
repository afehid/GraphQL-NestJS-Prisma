import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';

@ObjectType()
export class Owner {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
