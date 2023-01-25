import path from "path";
import ora from "ora";
import fse from "fs-extra";
import { execa } from "execa";
import { log } from "@dk-widget-cli/shared";

const genCacheDir = (tempPath) => path.resolve(tempPath, "node_modules");

const downloadRemoteTemplate = async (targetPath) => {
  // 下载模板
  await execa("npm", ["install", "@dk-widget-cli/template"], {
    cwd: targetPath,
  });
};

export const downloadTemplate = async (templateInfo) => {
  const { tempPath } = templateInfo;
  const cacheDir = genCacheDir(tempPath);
  // 创建目录
  fse.ensureDirSync(cacheDir);
  // 进度条加载
  const spinner = ora("下载模板中 ...").start();
  try {
    await downloadRemoteTemplate(tempPath);
    spinner.stop();
    log.info("下载模板成功");
  } catch (error) {
    spinner.stop();
    log.error("下载模板失败", error?.message);
  }
};
