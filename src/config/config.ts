import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
export const serverConfig = {
  NODE_ENV: process.env.NODE_ENV,
  //   jwt_secret: process.env.jwt_secret || 'myjsonwbtoken',
  //   port: parseInt(process.env.port) || 5001,
  DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432',
};
