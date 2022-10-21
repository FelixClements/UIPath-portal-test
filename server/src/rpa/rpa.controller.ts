import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RpaService } from "./rpa.service";
import { RpaControllerBase } from "./base/rpa.controller.base";

@swagger.ApiTags("rpas")
@common.Controller("rpas")
export class RpaController extends RpaControllerBase {
  constructor(
    protected readonly service: RpaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
