import { DataSource } from "typeorm"
import config from '../settings';

const localDbHost = config.dbHost
const localDbPort = config.dbPort

export const myDataSource = new DataSource({
    type: "mysql",
    host: localDbHost,
    port: localDbPort,
    username: "root",
    password: "",
    database: "foodloop",
    entities: ["src/model/*.ts"],
    logging: true,
    synchronize: true,
})


