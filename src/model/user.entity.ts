import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Base } from "./BaseEntity";
import { Company } from "./company.entity";
import { Order } from "./order.entity";
import { Role } from "./role.entity";

@Entity()
export class User extends Base
{
    // change base entity to something that kaes authid primary key
    @Column()
    authId: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @ManyToOne(type => Company,{onDelete:"SET NULL"})
    company: Company

    @OneToMany(type => Order, o => o.user,{cascade:true})
    orders: Order[]

    @ManyToMany(() => Role,{cascade:true})
    @JoinTable()
    roles: Role[]

}