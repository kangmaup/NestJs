import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tag {
    @PrimaryColumn()
    id:number

    @Column()
    tagName : string

    @Column()
    description: string
}