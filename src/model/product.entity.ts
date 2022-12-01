import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Company } from "./company.entity";

@Entity()
export class Product extends Base
{

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(type => Company)
    company: Company

    @Column({type: "decimal",precision: 5, scale: 2 , default: 0})
    price: number
}