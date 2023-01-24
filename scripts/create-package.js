import fse from "fs-extra";
import path from "path";
import url from "url";
import chalk from "chalk";

// 获取项目名
const PROJECT_NAME = process.argv[2];

// 创建文件夹
const handleCreateNewPackage = () => {
  const TARGET_PATH = path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    `../packages/${PROJECT_NAME}`
  );

  if (fse.existsSync(TARGET_PATH)) {
    return console.error(chalk.red(`packages下已存在子项目${PROJECT_NAME}`));
  }

  try {
    const pkg = JSON.parse(
      fse.readFileSync(
        path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          "../package.json"
        )
      )
    );
    // 创建文件夹
    const TARGET_PKG = {
      name: `@${pkg.name}/${PROJECT_NAME}`,
      main: "lib/index.js",
      version: "1.0.0",
      license: "ISC",
      type: "module",
    };

    fse.mkdirSync(TARGET_PATH);
    // 创建 package.json
    fse.writeJSONSync(`${TARGET_PATH}/package.json`, TARGET_PKG, { spaces: 2 });
    // 创建 lib 文件
    fse.createFileSync(`${TARGET_PATH}/lib/index.js`);
  } catch (error) {
    console.error(chalk.red(error));
  }
};

if (!PROJECT_NAME?.length) {
  console.error(chalk.red("请输入要创建的子项目名称 pkg-craete <name>"));
} else {
  handleCreateNewPackage();
}
