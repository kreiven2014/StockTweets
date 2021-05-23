/* CONFIGS */
import { MAIN_CONFIG } from "src/configs";

class Logger {
  log = (...args: Array<any>) => {
    if (MAIN_CONFIG.ENABLE_LOGS) {
      console.log(...args); // eslint-disable-line no-console
    }
  };

  warn = (...args: Array<any>) => {
    if (MAIN_CONFIG.ENABLE_LOGS) {
      console.warn(...args);
    }
  };

  info = (...args: Array<any>) => {
    if (MAIN_CONFIG.ENABLE_LOGS) {
      console.info(...args);
    }
  };
}

const logger = new Logger();

export default logger;
