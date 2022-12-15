import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Company extends Base
{
    @Column()
    name: string

    @OneToOne(type => User,{onDelete:"CASCADE"})
    owner:User

    @OneToMany(type => User, u => u.company,{cascade:true})
    users: User[]

    @OneToMany(type => Product, p => p.company,{cascade:true})
    products: Product[]

    @Column()
    type: string

    @Column()
    adress:string

    @Column()
    postCode:string
}