import { DataSource } from "typeorm"
import config from '../settings';

const host = config.dbHost
const port = config.dbPort

export const myDataSource =  new DataSource({
    type: "mysql",
    host: config.prodDbHost,
    port: config.prodDbPort,
    username: config.prodDbUser,
    password: config.prodDbPass,
    database: config.prodDb,
    entities: ["src/model/*.ts"],
    logging: true,
    synchronize: true,
})





