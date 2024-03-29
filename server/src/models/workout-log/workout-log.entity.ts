import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Train } from "../train/train.entity";
import { Exercise } from "../exercise/exercise.entity";
import { Periodization } from "../periodization/periodization.entity";
import { User } from "../user/user.entity";

@Entity('WORKOUT_LOG')
export class WorkoutLog {
    @PrimaryColumn({name: 'EXERCISEID'})
    exerciseId: number;

    @PrimaryColumn({name: 'TRAININGDAYID'})
    trainingDayId: number

    @Column({name: 'PERIODIZATIONID'})
    periodizationId: number;

    @Column({ name: 'CREATORID'})
    creatorId: number;

    @Column({ name: 'POSITION'})
    position: number;

    @Column({ name: 'STATUS'})
    status: boolean;

    @Column({name: 'SETS'})
    sets: number;

    @Column({name: 'REPS'})
    reps: number;

    @Column({name: 'WEIGHT', default: null})
    weight: number;

    @Column({ name: 'FEEDBACKTEXT', default: null})
    feedbackText: string;

    @Column({name: 'FEEDBACKVIDEO', default: null})
    feedbackVideo: string;

    @ManyToOne(() => Train, (train) => train.workoutLogs, {onDelete: 'CASCADE', orphanedRowAction:'delete'})
    @JoinColumn({name: 'TRAININGDAYID', referencedColumnName: 'id'})
    train: Train
 
    @ManyToOne(() => Periodization, (periodization) => periodization.workoutLogs, {onDelete: 'CASCADE', orphanedRowAction:'delete'})
    @JoinColumn({name: 'PERIODIZATIONID', referencedColumnName: 'id'})
    periodization: Periodization

 

    @ManyToOne(() => Exercise, (exercise) => exercise.workoutLogs, {onDelete: 'CASCADE', orphanedRowAction: 'delete'})
    @JoinColumn({name: 'EXERCISEID', referencedColumnName: 'id'})
    exercise: Exercise

    @ManyToOne(() => User, (creator) => creator.workoutLogs, { onDelete: 'CASCADE', orphanedRowAction: 'delete'})
    @JoinColumn( { name: 'CREATORID', referencedColumnName: 'id'})
    creator: User

}
