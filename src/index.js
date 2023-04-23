import * as T from "@tidyjs/tidy";
//const T = require("@tidyjs/tidy");

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
  "transmute"
  "when",
  "pivotLonger",
  "pivotWider"
];

tidyFns.forEach((fn) => {
  Array.prototype.addRows = function () {
    return T[fn].apply(null, arguments)(this);
  };
});
