import { makeInput, makeList } from "@dk-widget-cli/shared";
import path from "path";
import { homedir } from "os";

export const TemplateMap = {
  WithUI: "widget-with-ui",
  WithoutUI: "widget-without-ui",
};

export const TEMPLATE_TYPE = [
  {
    name: "小组件模板",
    value: TemplateMap.WithoutUI,
  },
  {
    name: "小组件模板 (包含 iFrame)",
    value: TemplateMap.WithUI,
  },
];

const TEMP_FOLDER = ".dk-widget-cli";

const handleTemplateNameInput = () => {
  return makeInput({
    message: "请输入项目名称",
    defaultValue: "",
    validate: (v) => (v.length > 0 ? true : "项目名称长度需大于0"),
  });
};

const handleTemplateTypeSelect = () => {
  return makeList({
    choices: TEMPLATE_TYPE,
    message: "选择项目模板",
  });
};

/**
 * @description 获取模板缓存路径
 */
const genTemplateTempPath = () => {
  return path.resolve(`${homedir()}/${TEMP_FOLDER}`, "widget-template");
};

/**
 * @description 创建项目模板
 */
export const createTemplateInfo = async (name) => {
  const userChoice = {
    name,
    projectType: undefined,
    tempPath: undefined,
  };

  // 若未传入名称参数则输入项目名称
  userChoice.name = name || (await handleTemplateNameInput());
  // 选择项目模板
  userChoice.projectType = await handleTemplateTypeSelect();
  // 获取缓存路径
  userChoice.tempPath = genTemplateTempPath();

  return userChoice;
};
