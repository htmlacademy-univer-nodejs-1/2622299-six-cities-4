import { Command } from "./command.interface.js";
import chalk from 'chalk';

export class HelpCommand implements Command {
    public getName() {
        return '--help';
    }

    public execute(..._params: string[]) {
        const info = `Программа для подготовки данных для REST API сервера.  

        Пример: cli.js --<command> [--arguments]

        Команды:

        --version:                   # выводит номер версии
        --help:                      # печатает этот текст
        --import <path>:             # импортирует данные из TSV
        --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных`;

        console.info(chalk.blue(info));
    }
}