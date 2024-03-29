import {Entity, Column, ManyToOne, PrimaryColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { User } from '../user/user.entity';
import { Periodization } from '../periodization/periodization.entity';
import { WorkoutLog } from '../workout-log/workout-log.entity';

@Entity('TRAIN')
export class Train {
    @PrimaryColumn( {name: 'ID'})
    id: number;

    @Column({ name: 'TITLE'})
    title: string;

    @Column({ name: 'POSITION'})
    position: number;

    @Column({ name: 'STATUS'})
    status: boolean;

    @Column({ name: 'CREATORID'})
    creatorId: number;

    @ManyToOne( () => Periodization, (periodization) => periodization.trains, { 
        onDelete :'CASCADE' ,  
        orphanedRowAction: 'delete'
    } )
    @JoinColumn({name: 'CREATORID', referencedColumnName: 'id'})
    periodization: Periodization
 
    @OneToMany( () => WorkoutLog, (workoutLog) => workoutLog.train, {cascade: true})
    @JoinColumn({name: 'TRAININGDAYID', referencedColumnName: 'trainingDayId' })
    workoutLogs: Array<WorkoutLog>


 

}

