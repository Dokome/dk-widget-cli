import { Command, log } from "@dk-widget-cli/shared";
import { createTemplateInfo } from "./createTemplate.js";
import { downloadTemplate } from "./downloadTemplate.js";
import { installTemplate } from "./installTemplate.js";

class CreateCommand extends Command {
  get command() {
    return "create [project-name]";
  }

  get description() {
    return "create a project by template";
  }

  get options() {
    return [];
  }

  async action([name, opts]) {
    log.verbose("create", name, opts);
    // 1.选择项目模板，生成项目信息
    const templateInfo = await createTemplateInfo(name, opts);
    log.verbose("info", templateInfo);
    // 2.下载项目模板至缓存目录
    await downloadTemplate(templateInfo);
    // 3.安装项目模板至项目目录
    await installTemplate(templateInfo, opts);
  }
}

export const createCommand = (instance) => new CreateCommand(instance);
