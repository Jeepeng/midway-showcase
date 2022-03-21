import { Configuration } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as typegoose from '@midwayjs/typegoose';
import { join } from 'path';

@Configuration({
  imports: [koa, typegoose],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {}
