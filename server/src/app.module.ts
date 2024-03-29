import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './domains/auth/auth.module';
import { TrainModule } from './domains/train/train.module';
import { UserModule } from './domains/user/user.module';
import { PeriodizationModule } from './domains/periodization/periodization.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user/user.entity';
import { Train } from './models/train/train.entity';
import { Periodization } from './models/periodization/periodization.entity';
import { DatabaseConfig } from './config/db.configuration';  
import { ScheduleModule } from '@nestjs/schedule';
import { ExerciseModule } from './domains/exercise/exercise.module';
import { WorkoutLogModule } from './domains/workout-log/workout-log.module';

@Module({
  imports: [  
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: DatabaseConfig,
      inject: [ConfigService]
    } ),
    AuthModule, TrainModule, UserModule, PeriodizationModule, ExerciseModule, WorkoutLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
