import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Course} from "./Course";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", { length: 50 })
    name: string;

    @ManyToMany(() => Course, course => course.teachers, {
        cascade: true
    })
    courses: Course[];

}
