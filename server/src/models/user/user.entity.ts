import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, Unique } from "typeorm";
import { Train } from "../train/train.entity";
import { Periodization } from "../periodization/periodization.entity";
import { WorkoutLog } from "../workout-log/workout-log.entity";
import { normalizeString } from "src/utils/normalizeString/normalizeString";

@Entity('USER')
@Unique(['username'])
export class User {
    @PrimaryColumn({ name: 'ID'})
    id: number;

    @Column({ name: 'USERNAME'})
    username: string;

    @Column({name : 'PASSWORD'})
    password: string;

    @Column({ name: 'FISTNAME'})
    firstName: string;

    @Column({ name: 'LASTNAME'})
    lastName: string;

    @Column({ name: 'NORMALIZEDNAME'})
    normalizedName: string;

    @OneToMany( () => Periodization, (periodization) => periodization.user, {cascade: true})
    @JoinColumn({name: 'CREATORID', referencedColumnName: 'creatorId' })
    periodizations: Array<Periodization>
 
    @OneToMany(() => WorkoutLog, (workoutLog) => workoutLog.creator, {cascade: true})
    @JoinColumn({name: 'CREATORID', referencedColumnName: 'creatorId'})
    workoutLogs: Array<WorkoutLog>

    @BeforeInsert()
    @BeforeUpdate()
    async normalize(){
        this.normalizedName = await normalizeString(this.firstName)
    }

}
