import { DataSource } from "typeorm"
import * as path from "path"
import { Company } from "./model/company.entity"
import { User } from "./model/user.entity"
import { Order } from "./model/order.entity"
import { Role } from "./model/role.entity"
import { Product } from "./model/product.entity"

export const myDataSource = new DataSource({
  type: "sqlite",
  database: `${path.resolve(__dirname, "..")}/data/line.sqlite`,
  entities: [Company,User,Order,Role,Product],
  logging: true,
  synchronize: true,
})




