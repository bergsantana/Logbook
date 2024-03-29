import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { WorkoutLog } from "../workout-log/workout-log.entity";


@Entity('EXERCISE')
export class Exercise {
    @PrimaryColumn({name: 'ID'})
    id: number;

    @Column({name: 'NAME'})
    name: string;

    @Column({name: 'DESCRIPTION', default: null})
    description: string;

    @Column({name: 'IMAGE', default: null})
    image: string;

    @Column({name: 'VIDEO', default: null})
    video: string; 
    
    @OneToMany(()=> WorkoutLog, (workoutLog) => workoutLog.exercise, {cascade: true},)
    @JoinColumn({name: 'EXERCISEID', referencedColumnName: 'exerciseId'})
    workoutLogs: Array<WorkoutLog>
}
