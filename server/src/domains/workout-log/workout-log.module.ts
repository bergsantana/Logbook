import { Module } from '@nestjs/common';
import { WorkoutLogService } from './workout-log.service';
import { WorkoutLogController } from './workout-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutLog } from 'src/models/workout-log/workout-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutLog])],
  controllers: [WorkoutLogController],
  providers: [WorkoutLogService],
})
export class WorkoutLogModule {}
