import { Module } from '@nestjs/common';
import SampleController from "@sample/sample.controller";

const controllers = [SampleController];

@Module({
  imports: [],
  controllers,
  providers: []
})
export default class SampleModule {}
