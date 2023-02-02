import { DataSource } from "typeorm";
import { Detail } from "./users/entities/detail.entity";
import { User } from "./users/entities/user.entity";

export const PostgresDataSource = new DataSource({
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'postgre',
    database : 'app_nest',
    entities: [User,Detail],
    migrations: ['src/migration/**/*.ts'],
    synchronize : true,

})

