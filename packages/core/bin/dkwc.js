#! /usr/local/bin/node
import isLocalImport from "import-local";
import { entry } from "../lib/index.js";

// 判断是否为本地版本
isLocalImport(import.meta.url) ? console.log("使用本地版本脚手架") : entry();
