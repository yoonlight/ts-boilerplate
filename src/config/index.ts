const env  = process.env

export const config = {
  port: env.PORT,
  mysql: {
    host: env.MYSQL_HOST,
    port: Number(env.MYSQL_PORT),
    user: env.MYSQL_USER,
    pass: env.MYSQL_PASS,
    database: env.MYSQL_NAME
  }
};
