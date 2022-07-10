import { ErrorLogger } from "./loggers/errorLogger";
import { InfoLogger } from "./loggers/infoLogger";
import { WarningLogger } from "./loggers/warningLogger";

const enum LOGGERS {
    INFO = 1,
    WARNING = 2,
    ERROR = 3
}

function getLoggersChain() {
    const errorLogger = new ErrorLogger(LOGGERS.ERROR);
    const warningLogger = new WarningLogger(LOGGERS.WARNING);
    const infoLogger = new InfoLogger(LOGGERS.INFO);

    infoLogger.setNextLogger(warningLogger);
    warningLogger.setNextLogger(errorLogger);

    return infoLogger;
}

const logger = getLoggersChain();

logger.logMessage(LOGGERS.INFO,
    "This is an information.");

console.log('===================')

logger.logMessage(LOGGERS.WARNING,
    "This is a warning.");

console.log('===================')


logger.logMessage(LOGGERS.ERROR,
    "This is an error.");

