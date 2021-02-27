import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Course} from "./Course";

export enum Days {
    SEGUNDA = 0,
    TERCA = 1,
    QUARTA = 2,
    QUINTA = 3,
    SEXTA = 4,
    SABADO = 5,
    DOMINGO = 6,
}

@Entity()
export class Class {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Course, course => course.classes)
    course: Course;

    @Column('time')
    startTime: string;

    @Column('time')
    endTime: string;

    @Column({
        type: "enum",
        enum: Days,
        default: Days.SEGUNDA
    })
    day: Days;
}
