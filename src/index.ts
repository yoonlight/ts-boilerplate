import "reflect-metadata";
import Koa from 'koa';
import Orm from './loaders';

class App {
  public port = process.env.PORT
  public app = new Koa()
  constructor() {
    this.app.use(async ctx => {
      ctx.body = 'Hello World';
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`TypeScript Koa App Listening ${this.port}`);
    });
  }
}

const server = new App();
const orm = new Orm();
server.start()

orm.connect()