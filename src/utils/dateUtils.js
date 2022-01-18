import {
  formatDistanceStrict,
  formatDistanceToNowStrict,
  parse,
} from "date-fns";
import ruLocale from "date-fns/locale/ru";

export const getDistanceDate = (from, to) =>
  formatDistanceStrict(
    parse(from, "yyyy-MM-dd", new Date()),
    parse(to, "yyyy-MM-dd", new Date()),
    {
      locale: ruLocale,
    }
  );

export const getDistanceDateToNow = (from) =>
  formatDistanceToNowStrict(parse(from, "yyyy-MM-dd", new Date()), {
    locale: ruLocale,
  });
