import * as T from "@tidyjs/tidy";
import { TidyFn } from '@tidyjs/tidy';

declare global {
  interface Array<T> {
    //tidy: TidyFn<T>;
    select: TidyFn<T>;
    mutate: TidyFn<T>;
    arrange: TidyFn<T>;
    rename: TidyFn<T>;
    distinct: TidyFn<T>;
    summarize: TidyFn<T>;
    transmute: TidyFn<T>;
    groupBy: TidyFn<T>;
    ungroup: TidyFn<T>;
    count: TidyFn<T>;
    head: TidyFn<T>;
    tail: TidyFn<T>;
    peek: TidyFn<T>;
    union: TidyFn<T>;
    intersect: TidyFn<T>;
    subtract: TidyFn<T>;
    spread: TidyFn<T>;
    nest: TidyFn<T>;
    unnest: TidyFn<T>;
    flatten: TidyFn<T>;
    pivotWider: TidyFn<T>;
    pivotLonger: TidyFn<T>;
    //join: TidyFn<T>;
    leftJoin: TidyFn<T>;
    rightJoin: TidyFn<T>;
    fullJoin: TidyFn<T>;
    innerJoin: TidyFn<T>;
    crossJoin: TidyFn<T>;
    semiJoin: TidyFn<T>;
    antiJoin: TidyFn<T>;
  }
}

const tidyFns = [
  "addItems",
  //"addRows",
  "arrange",
  //"sort",
  "complete",
  "count",
  "debug",
  "distinct",
  "expand",
  //"fill",
  //"filter",
  "fullJoin",
  "groupBy",
  "innerJoin",
  "leftJoin",
  //"map",
  "mutate",
  "mutateWithSummary",
  "rename",
  "replaceNully",
  "select", "pick",
  //"slice",
  "sliceHead",
  "sliceTail",
  "sliceMin",
  "sliceMax",
  "sliceSample",
  "summarize",
  "summarizeAll",
  "summarizeAt",
  "summarizeIf",
  "tally",
  "total",
  "totalAll",
  "totalAt",
  "totalIf",
  "transmute",
  "when",
  "pivotLonger",
  "pivotWider"
];

tidyFns.forEach((fn: string) => {
  Array.prototype[fn] = function () {
    return T[fn].apply(null, arguments)(this);
  };
});
