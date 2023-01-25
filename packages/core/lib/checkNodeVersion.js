import semver from "semver";
import { log } from "@dk-widget-cli/shared";

const LOWEST_NODE_VERSION = "14.0.0";

export const checkNodeVersion = () => {
  log.verbose("node version", process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(
      chalk.red(`The lowest node version is ${LOWEST_NODE_VERSION}`)
    );
  }
};
