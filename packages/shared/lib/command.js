export class Command {
  constructor(instance) {
    if (!instance) {
      throw new Error("Command instance must not be null");
    }

    /**
     * @type {import("commander/typings").Command}
     */
    this.program = instance;
    const cmd = this.program.command(this.command);

    cmd.description(this.description);
    cmd.hook("preAction", this.preAction);
    cmd.hook("postAction", this.postAction);

    if (this.options.length > 0) {
      this.options.forEach((option) => cmd.option(...option));
    }

    cmd.action((...params) => this.action(params));
  }

  get command() {
    throw new Error("Command must be implements");
  }

  get description() {
    throw new Error("Description must be implements");
  }

  get options() {
    return [];
  }

  get action() {
    throw new Error("Action must be implements");
  }

  preAction() {
    // 默认为空函数
  }

  postAction() {
    // 默认为空函数
  }
}
