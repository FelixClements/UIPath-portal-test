import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RpaServiceBase } from "./base/rpa.service.base";

@Injectable()
export class RpaService extends RpaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
