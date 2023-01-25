import { Command } from "@dk-widget-cli/shared";

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
}

export const createCommand = (instance) => new CreateCommand(instance);
