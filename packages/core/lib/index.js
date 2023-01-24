import { create } from "./create.js";

// 脚手架入口
export const entry = () => {
  const program = create();
  // 解析参数
  program.parse(process.argv);
};
