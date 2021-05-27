import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT);
let message: string = 'Hello World';
console.log(message);
console.log(process.env.PORT);
