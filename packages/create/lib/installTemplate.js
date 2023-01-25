import fse from "fs-extra";
import path from "path";
import ora from "ora";
import glob from "glob";
import ejs from "ejs";
import { log, getRandomWidgetId } from "@dk-widget-cli/shared";

const globCallback = (err, files, data, installDir) => {
  files.forEach((file) => {
    const filePath = path.join(installDir, file);
    log.verbose("filePath", filePath);
    ejs.renderFile(filePath, data, (err, result) => {
      err ? log.error(err) : fse.writeFileSync(filePath, result);
    });
  });
};

const handleEjsRender = async (installDir, name) => {
  const data = {
    packageName: name,
    widgetName: name,
    widgetId: getRandomWidgetId(),
  };

  glob(
    "**",
    {
      cwd: installDir,
      nodir: true,
      ignore: ["**/node_modules/**"],
    },
    (...args) => globCallback(...args, data, installDir)
  );
};

const handleCopyFile = (tempPath, projectType, installDir) => {
  const originFile = path.resolve(
    tempPath,
    "node_modules",
    "@dk-widget-cli/template",
    projectType
  );

  const files = fse.readdirSync(originFile);
  const spinner = ora("正在拷贝模板文件...").start();
  // 执行复制操作
  files.forEach((file) =>
    fse.copySync(`${originFile}/${file}`, `${installDir}/${file}`)
  );
  spinner.stop();
  log.info("安装模板成功");
};

/**
 * @description 安装项目模板
 */
export const installTemplate = async (templateInfo) => {
  const { projectType, name, tempPath } = templateInfo;
  const rootDir = process.cwd();
  const installDir = path.resolve(`${rootDir}/${name}`);

  fse.ensureDirSync(tempPath);
  // 先移除原来的文件夹
  fse.removeSync(installDir);
  // 创建新文件夹
  fse.ensureDirSync(installDir);
  // 从缓存复制到目标文件夹
  handleCopyFile(tempPath, projectType, installDir);
  // 执行 ejs 模板替换
  await handleEjsRender(installDir, name);
};
