import { ILogger } from "../interfaces/logger";

export class WarningLogger implements ILogger {
    level: number;
    nextLogger: ILogger;

    constructor(level: number) {
        this.level = level;
    }

    setNextLogger(logger: ILogger) {
        this.nextLogger = logger;
    }

    logMessage (level: number, text: string) {
        if (this.level !== level) {
            this.nextLogger.logMessage(level, text);
            return;
        }
        console.log(`[WARNING]: ${text}`)
    }
}