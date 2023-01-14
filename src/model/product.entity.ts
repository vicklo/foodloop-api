import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Company } from "./company.entity";

@Entity()
export class Product extends Base
{
    @Column()
    name: string;

    @Column()
    description: string

    @ManyToOne(type => Company,{onDelete:"CASCADE"})
    company: Company

    @Column({type: "decimal",precision: 5, scale: 2 , default: 0})
    price: number

    @Column({default:"https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"})
    url:string
}