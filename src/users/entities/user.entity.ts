import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Detail } from "./detail.entity";

@Entity()
export class User {
    @PrimaryColumn()
    id:number
   
    @Column({
        unique: true
    })
    username: string
    

    @Column()
    password: string

    @Column()
    refreshtoken: string
    
    

}
