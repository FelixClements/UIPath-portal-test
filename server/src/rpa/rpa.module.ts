import { Module } from "@nestjs/common";
import { RpaModuleBase } from "./base/rpa.module.base";
import { RpaService } from "./rpa.service";
import { RpaController } from "./rpa.controller";
import { RpaResolver } from "./rpa.resolver";

@Module({
  imports: [RpaModuleBase],
  controllers: [RpaController],
  providers: [RpaService, RpaResolver],
  exports: [RpaService],
})
export class RpaModule {}
