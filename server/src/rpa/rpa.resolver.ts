import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RpaResolverBase } from "./base/rpa.resolver.base";
import { Rpa } from "./base/Rpa";
import { RpaService } from "./rpa.service";

@graphql.Resolver(() => Rpa)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RpaResolver extends RpaResolverBase {
  constructor(
    protected readonly service: RpaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
