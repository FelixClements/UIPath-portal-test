import { Rpa as TRpa } from "../api/rpa/Rpa";

export const RPA_TITLE_FIELD = "id";

export const RpaTitle = (record: TRpa): string => {
  return record.id || record.id;
};
