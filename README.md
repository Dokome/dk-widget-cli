# dk-widget-cli

![dk-widget-cli](https://socialify.git.ci/Dokome/dk-widget-cli/image?description=1&font=Bitter&name=1&theme=Light)

本项目为即时设计小组件 `widget` 项目模板脚手架工具

- 🏠 支持全局安装 cli 工具
- 👀 目前支持的模板可在 packages/template 下查看

### 快速上手

```shell
# 下载 cli 工具
npm add @dk-widget-cli/core -g

# 当前目录创建 widget 项目并选择模板
dkwc create <name?>
```

### 拓展命令

如果你正在拓展本脚手架的功能，可以通过 `pkg-create` 快速创建子模块，使用具体方式如下所示

```shell
# 创建子项目
pnpm pkg-create <name>
```
