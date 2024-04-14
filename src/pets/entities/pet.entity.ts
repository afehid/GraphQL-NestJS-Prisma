import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';

@ObjectType()
export class Pet {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type: string;

  @Field(() => Int)
  owner_id: number;
}
