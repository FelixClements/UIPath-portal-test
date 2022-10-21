/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Rpa } from "@prisma/client";

export class RpaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RpaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaFindManyArgs>
  ): Promise<number> {
    return this.prisma.rpa.count(args);
  }

  async findMany<T extends Prisma.RpaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaFindManyArgs>
  ): Promise<Rpa[]> {
    return this.prisma.rpa.findMany(args);
  }
  async findOne<T extends Prisma.RpaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaFindUniqueArgs>
  ): Promise<Rpa | null> {
    return this.prisma.rpa.findUnique(args);
  }
  async create<T extends Prisma.RpaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaCreateArgs>
  ): Promise<Rpa> {
    return this.prisma.rpa.create<T>(args);
  }
  async update<T extends Prisma.RpaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaUpdateArgs>
  ): Promise<Rpa> {
    return this.prisma.rpa.update<T>(args);
  }
  async delete<T extends Prisma.RpaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RpaDeleteArgs>
  ): Promise<Rpa> {
    return this.prisma.rpa.delete(args);
  }
}