import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Train } from "../train/train.entity";
import { WorkoutLog } from "../workout-log/workout-log.entity";

@Entity('PERIODIZATION')
export class Periodization {
    @PrimaryColumn({name: 'ID'})
    id: number;

    @Column({name: 'NAME'})
    name: string;

    @Column({name: 'START'})
    start: Date;

    @Column({name: 'END'})
    end: Date;

    @Column({name: 'DELOAD'})
    deload: number;

    @Column({ name: 'CREATORID'})
    creatorId: number;

    @Column({ name: 'CONSUMERID'})
    consumerId: number;

    @ManyToOne(() => User, (user) => user.periodizations, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete'
    })
    @JoinColumn({name: 'CREATORID', referencedColumnName: 'id'})
    user: User;

    @OneToMany(() => Train, (train) => train.periodization, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete'
    })
    trains: Array<Train>

    @OneToMany( () => WorkoutLog, (workoutLog) => workoutLog.periodization, {cascade: true})
    @JoinColumn({name: 'PERIODIZATIONID', referencedColumnName: 'periodizationId' })
    workoutLogs: Array<WorkoutLog>

}

