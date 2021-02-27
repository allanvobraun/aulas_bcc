import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Course} from "./Course";

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 50})
    name: string;

    @ManyToMany(() => Course, course => course.teachers, {
        cascade: true
    })
    courses: Course[];

    toString(): string {
        return this.name;
    }

}
