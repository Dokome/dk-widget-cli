import path from "path";
import url from "url";

/**
 * @description 获取当前路径的目录
 */
export const handleCurrentDir = (source) =>
  path.resolve(path.dirname(url.fileURLToPath(source)));
