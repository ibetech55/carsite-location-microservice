export class AppError<T extends string | object> {
  public message: T;
  public statusCode: number;

  constructor(message: T, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
