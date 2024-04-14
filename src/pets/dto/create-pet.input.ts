import { Field, InputType, Int } from '@nestjs/graphql'; // Import Int from @nestjs/graphql
import { Prisma } from '@prisma/client';
import { IsAlpha } from 'class-validator';
import { Owner } from 'src/owners/entities/owner.entity';

@InputType()
export class CreatePetInput implements Prisma.PetUncheckedCreateInput {
  @Field((type) => Int)
  owner_id: number;

  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type: string;
}
