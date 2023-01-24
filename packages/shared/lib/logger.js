import log from "npmlog";

// 判断是否为开发环境
const isDebug = () =>
  process.argv.includes("--debug") || process.argv.includes("-d");

// 设置日志登记
log.level = isDebug() ? "verbose" : "info";
log.heading = "dwsc";

export { log };
