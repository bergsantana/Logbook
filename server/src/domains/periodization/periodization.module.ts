import { Module } from '@nestjs/common';
import { PeriodizationService } from './periodization.service';
import { PeriodizationController } from './periodization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodization } from 'src/models/periodization/periodization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Periodization])],
  controllers: [PeriodizationController],
  providers: [PeriodizationService],
})
export class PeriodizationModule {}
