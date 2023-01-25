#! /usr/local/bin/node
import { log } from "@dk-widget-cli/shared";
import isLocalImport from "import-local";
import { entry } from "../lib/index.js";

// 判断是否为本地版本
isLocalImport(import.meta.url) ? log.verbose("Use local version") : entry();
