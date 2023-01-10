import { ConnectionOptions } from 'typeorm';

export const myDataSource: ConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  logging: false,
  entities: [
    'src/entity/**/*.ts'
  ],
  migrations: [
    'src/migration/**/*.ts'
  ],
  subscribers: [
    'src/subscriber/**/*.ts'
  ]
};