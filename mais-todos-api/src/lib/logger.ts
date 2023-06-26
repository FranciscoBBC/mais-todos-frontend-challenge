export interface Ilogger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

class Logger implements Ilogger {
  log(message: string): void {
    console.log(message);
  }
  warn(message: string): void {
    console.warn(message);
  }
  error(message: string): void {
    console.error(message);
  }
}

export default Logger;
