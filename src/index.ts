import "reflect-metadata";
import Koa from 'koa';
import Orm from './loaders';
import router from '@koa/router';
import koaBody from 'koa-body';
import { getConnection } from 'typeorm';
class App {
  public port = process.env.PORT
  public app = new Koa()
  public router = new router()
  constructor() {
    this.registerMiddleware()
    this.registerRouter()
    this.app.use(async ctx => {
      ctx.body = 'Hello World';
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`TypeScript Koa App Listening ${this.port}`);
    });
  }

  registerMiddleware() {
    this.app.use(koaBody())
  }

  registerRouter() {
    this.router.get('/api', async ctx => {
      const conn = getConnection()
      if (conn.isConnected) {
        await conn.synchronize()
        ctx.body = 'Complete Synchronize'
      }
    })

    this.app.use(this.router.routes())
  }
}

const server = new App();
const orm = new Orm();
server.start()

orm.connect()