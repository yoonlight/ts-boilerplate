import { createConnection, Connection } from 'typeorm';
import { config } from '../config';

const mysql = config.mysql
class Orm {
  private _connection: Connection;
  public get connection(): Connection {
    return this._connection;
  }
  public set connection(value: Connection) {
    this._connection = value;
  }
  constructor() {

  }

  async connect() {
    try {
      this._connection = await createConnection({
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