import { Log } from './Logger';

export enum SEVERITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

class AppError {
  public readonly tag: string;
  public readonly extra?: any;
  public readonly severity: SEVERITY;

  constructor(tag: string, statusCode = SEVERITY.MEDIUM, extra?: any) {
    this.tag = tag;
    this.severity = statusCode;
    this.extra = extra;

    switch (statusCode) {
      case SEVERITY.LOW:
        Log.i(tag, extra);
        break;
      case SEVERITY.MEDIUM:
        Log.w(tag, extra);
        break;
      case SEVERITY.HIGH:
        Log.e(tag, extra);
        break;

      default:
        break;
    }
  }
}

export default AppError;
