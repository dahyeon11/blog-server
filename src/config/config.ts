export const config = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    timezone: '+09:00',
    pool: {
      max: 20,
      min: 5,
      idle: 60000,
    },
  },
  production: {
    username: '',
    password: '',
    database: '',
    port: '',
    host: '',
    dialect: 'mysql',
    logging: false,
    timezone: '+09:00',
    pool: {
      max: 20,
      min: 5,
      idle: 60000,
    },
  },
  mailer: {
    transport: process.env.EMAIL_ADMIN_AUTH,
    default: {
      from: process.env.EMAIL_ADMIN_SENDERINFO
    }
  }
};
