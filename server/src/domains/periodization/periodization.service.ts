import { Injectable } from '@nestjs/common';
import { CreatePeriodizationDto } from './dto/create-periodization.dto';
import { UpdatePeriodizationDto } from './dto/update-periodization.dto';

@Injectable()
export class PeriodizationService {
  create(createPeriodizationDto: CreatePeriodizationDto) {
    return 'This action adds a new periodization';
  }

  findAll() {
    return `This action returns all periodization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} periodization`;
  }

  update(id: number, updatePeriodizationDto: UpdatePeriodizationDto) {
    return `This action updates a #${id} periodization`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodization`;
  }
}
