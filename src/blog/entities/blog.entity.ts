import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Blog {
    @PrimaryColumn()
    id:number

    @Column()
    title:string

    @Column()
    body:string

    @Column()
    comments: string

    @Column({
        type: 'date',
        default: ()=>'NOW()'
    })
    date: Date

    @CreateDateColumn()
    
    @UpdateDateColumn()
    updatedDate : Date
    
    @Column()
    is_deleted:boolean

    @ManyToMany((type) => Tag)
    @JoinTable({
        name: 'blog_tag'
    })
    tag : Tag[]

    
}
