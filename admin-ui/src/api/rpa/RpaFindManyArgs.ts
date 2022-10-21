import { RpaWhereInput } from "./RpaWhereInput";
import { RpaOrderByInput } from "./RpaOrderByInput";

export type RpaFindManyArgs = {
  where?: RpaWhereInput;
  orderBy?: Array<RpaOrderByInput>;
  skip?: number;
  take?: number;
};
