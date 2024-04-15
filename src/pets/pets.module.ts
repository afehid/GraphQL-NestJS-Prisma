import { forwardRef, Module } from '@nestjs/common';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [OwnersModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule { }
