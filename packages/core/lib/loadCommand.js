import { createCommand } from "@dk-widget-cli/create";

export const loadCreateCommand = (instance) => {
  // 注册 create 指令
  createCommand(instance);
};
