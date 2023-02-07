const { DataSource } = require('typeorm');

const mysqlDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

mysqlDataSource
  .initialize()
  .then(() => {
    console.log('💽 Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('🚨 Error during Data Source initialization', err);
    mysqlDataSource.destroy();
  });

module.exports = mysqlDataSource;
