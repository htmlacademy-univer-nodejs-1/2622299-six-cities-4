import { Command } from './command.interface.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import chalk from 'chalk';

function isPackageJSONConfig(value: unknown) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.hasOwn(value, 'version')
  );
}

export class VersionCommand implements Command {
  constructor(private readonly filePath: string = './package.json') {}

  private readVersion() {
    const jsonContent = readFileSync(resolve(this.filePath), 'utf-8');
    const parsedContent = JSON.parse(jsonContent);

    if (!isPackageJSONConfig(parsedContent)) {
      throw new Error('Failed to parse json');
    }

    return parsedContent.version;
  }

  public getName() {
    return '--version';
  }

  public execute() {
    try {
      const version = this.readVersion();
      console.log(chalk.green(version));
    } catch (error) {
      console.error('Failed to read version');

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}