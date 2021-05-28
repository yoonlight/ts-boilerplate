import { createConnection, Connection } from 'typeorm';
import { config } from '../config';

const mysql = config.mysql
class Orm {
  constructor() {
    connection: Connection

  }

  async connect() {
    try {
      this.connection = await createConnection({
        type: "mysql",
        host: mysql.host,
        port: mysql.port,
        username: mysql.user,
        password: mysql.pass,
        database: mysql.database,
        entities: [
          "src/entity/**/*.ts"          
        ],
        // synchronize: true,
        logging: false
      })
      const isConnected = this.connection.isConnected
      if (isConnected) {
        console.log('MariaDB Server is connected ');
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default Orm