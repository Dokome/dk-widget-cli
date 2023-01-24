import path from "path";
import fse from "fs-extra";
import { program } from "commander";
import { handleCurrentDir, log } from "@dk-widget-cli/shared";
import { checkNodeVersion } from "./checkNodeVersion.js";

const dirname = handleCurrentDir(import.meta.url);
const pkg = fse.readJsonSync(path.resolve(dirname, "../package.json"));

export const create = () => {
  log.info("version", pkg.version);
  // commander 初始化
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .option("-d, --debug", "enable debug mode", false)
    .hook("preAction", checkNodeVersion);

  return program;
};
