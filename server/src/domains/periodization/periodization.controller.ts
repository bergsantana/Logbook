import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodizationService } from './periodization.service';
import { CreatePeriodizationDto } from './dto/create-periodization.dto';
import { UpdatePeriodizationDto } from './dto/update-periodization.dto';

@Controller('periodization')
export class PeriodizationController {
  constructor(private readonly periodizationService: PeriodizationService) {}

  @Post()
  create(@Body() createPeriodizationDto: CreatePeriodizationDto) {
    return this.periodizationService.create(createPeriodizationDto);
  }

  @Get()
  findAll() {
    return this.periodizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeriodizationDto: UpdatePeriodizationDto) {
    return this.periodizationService.update(+id, updatePeriodizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodizationService.remove(+id);
  }
}
