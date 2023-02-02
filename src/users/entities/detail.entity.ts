import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

export enum idType {
    PASSPORT = "PASSPORT",
    KTP = "KTP"
}

@Entity()
export class Detail {
    @PrimaryColumn()
    id:number
    
    @OneToOne(() => User)
    @JoinColumn({
        name : 'user_id',
        referencedColumnName : 'id' 
    })
    user: User

    @Column({
        type: 'enum',
        enum: idType,
        default: idType.KTP
    })
    identityType: idType

    @Column()
    identityNumber: string

    @Column({
        type: 'date',
        default: () => 'NOW()'
    })
    dateOfBirth: string

    @Column()
    placeOfBirth: string

    @Column()
    country: string

    @Column()
    province: string

    @Column()
    regency: string

    @Column()
    village: string
    
    @Column()
    street: string

}
