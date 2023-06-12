import * as T from "@tidyjs/tidy";
import { TidyFn, summarize, summarizeIf, sum } from '@tidyjs/tidy';

declare global {
  interface Array<T extends object> {
    [fn: string]: TidyFn<T>;
    select: TidyFn<T>;
    mutate: TidyFn<T>;
    arrange: TidyFn<T>;
    rename: TidyFn<T>;
    distinct: TidyFn<T>;
    summarize: typeof summarize;
    summarizeIf: typeof summarizeIf;
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
    leftJoin: TidyFn<T>;
    rightJoin: TidyFn<T>;
    fullJoin: TidyFn<T>;
    innerJoin: TidyFn<T>;
    crossJoin: TidyFn<T>;
    semiJoin: TidyFn<T>;
    antiJoin: TidyFn<T>;
  }
}

/*const tidyFns = [
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
  "transmute"
  "when",
  "pivotLonger",
  "pivotWider"
];*/

const tidyFns: (keyof typeof T)[] = [
  "select",
  "mutate",
  "arrange",
  "rename",
  "distinct",
  "summarize",
  "transmute",
  "groupBy",
  "ungroup",
  "count",
  "head",
  "tail",
  "peek",
  "union",
  "intersect",
  "subtract",
  "spread",
  "nest",
  "unnest",
  "flatten",
  "pivotWider",
  "pivotLonger",
  "leftJoin",
  "rightJoin",
  "fullJoin",
  "innerJoin",
  "crossJoin",
  "semiJoin",
  "antiJoin",
];

tidyFns.forEach((fn) => {
  Array.prototype[fn] = function (this: TidyFn<any>[], ...args: any[]) {
    return T[fn].apply(null, args)(this);
  };
});

const data = [
  { str: 'foo1', value2: 3, value: 3 },
  { str: 'bar1', value2: 4, value: 1 },
  { str: 'baz1', value2: 5, value: 3 },
  { str: 'foo2', value2: 1, value: 1 },
  { str: 'bar2', value2: 10, value: 7 },
];

// if first value for a key is numeric, summarize that column
data.summarizeIf((vector) => Number.isFinite(vector[0]), sum)
// output:
//[{ value: 15, value2: 23 }]