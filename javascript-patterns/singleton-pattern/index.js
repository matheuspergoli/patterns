import { connection } from './db-connection.js'

const dbConnect = connection

console.log(dbConnect.connect())
