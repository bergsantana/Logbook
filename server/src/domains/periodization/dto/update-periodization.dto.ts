import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodizationDto } from './create-periodization.dto';

export class UpdatePeriodizationDto extends PartialType(CreatePeriodizationDto) {}
