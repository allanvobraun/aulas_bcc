import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Teacher} from "./Teacher";
import {Class} from "./Class";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("char", { length: 50 })
    name: string;

    @ManyToMany(() => Teacher, teacher => teacher.courses)
    @JoinTable()
    teachers: Teacher[];

    @OneToMany(() => Class, _class => _class.course)
    classes: Class[];
}
