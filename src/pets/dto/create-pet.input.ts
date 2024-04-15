import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsAlpha, IsNumber } from 'class-validator';

@InputType()
export class CreatePetInput implements Prisma.PetUncheckedCreateInput {

  @IsNumber()
  @Field((type) => Int)
  owner_id: number;

  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type: string;
}
