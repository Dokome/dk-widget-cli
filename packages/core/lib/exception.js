import { isDebug, log } from "@dk-widget-cli/shared";

const handleExcpetion = (e, type) => {
  isDebug() ? log.error(type, e) : log.error(type, e.message);
};

export const initProcessExcpetionCaught = () => {
  process.on("uncaughtException", (e) => handleExcpetion(e, "error"));
  process.on("unhandledRejection", (e) => handleExcpetion(e, "promise"));
};
