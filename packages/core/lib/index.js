import { create } from "./create.js";
import { loadCreateCommand } from "./loadCommand.js";
import { initProcessExcpetionCaught } from "./exception.js";

// 脚手架入口
export const entry = () => {
  // 错误监听
  initProcessExcpetionCaught();
  //
  const program = create();
  // 加载 create 指令
  loadCreateCommand(program);
  // 解析参数
  program.parse(process.argv);
};
