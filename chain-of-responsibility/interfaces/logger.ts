export interface ILogger {
    level: number;
    nextLogger: ILogger;
    setNextLogger: (logger: ILogger) => void;
    logMessage: (level: number, text: string) => void;
}