/*
 *--------------------------------------------------------------
 *  Copyright 2018-2019 (c) Shady Khalifa (@shekohex).
 *  All rights reserved.
 *-------------------------------------------------------------
 */
import 'reflect-metadata';
import 'source-map-support/register';
// Patch TypeORM to workaround https://github.com/typeorm/typeorm/issues/3636
// import TypeORMMysqlDriver = require('typeorm/driver/mysql/MysqlDriver');
// const OriginalNormalizeType = TypeORMMysqlDriver.MysqlDriver.prototype.normalizeType;
// TypeORMMysqlDriver.MysqlDriver.prototype.normalizeType = column => {
//   if (column.type === 'json') {
//     return 'longtext';
//   }
//   return OriginalNormalizeType(column);
// };
import { AppModule } from '@app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, raw, urlencoded } from 'body-parser';
import * as express from 'express';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const instance = express();
  // Start Sentry
  // Sentry.init({ dsn: Env('SENTRY_DSN'), attachStacktrace: true, serverName: 'MyCommuinty' });
  // TODO: Edit these limits !
  instance.use(json({ limit: '15mb' }));
  instance.use(urlencoded({ limit: '15mb', extended: true, parameterLimit: 15000 }));
  instance.use(raw({ limit: '50mb' }));
  instance.use('/public/uploads', express.static('public/uploads'));
  const app = await NestFactory.create<NestExpressApplication>(AppModule , new ExpressAdapter(instance));
  // const app = await NestFactory.create(AppModule, instance, {
  //   logger,
  //   bodyParser: false,
  //    abortOnError: false 
  // });
  const port = 3000;


  await app
    .useGlobalPipes(new ValidationPipe({ transform: true }))
    .setGlobalPrefix('/api/v1')
    .disable('x-powered-by')
    .disable('etag')
    .listen(port);
 

  return port;
}
bootstrap().then((elem)=>{console.log(`server running in port ${elem}`);});
