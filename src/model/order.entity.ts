import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Order extends Base
{
    @Column()
    status: string

    @Column({type: "decimal",precision: 5, scale: 2 , default: 0})
    price: number

    @ManyToOne(type => User,{onDelete:"CASCADE"})
    user: User

    @Column()
    timeOrdered: string

    @ManyToMany(() => Product,{cascade:true})
    @JoinTable()
    products: Product[]
}