import { ErrorCode } from '@/core/enumeration/errorCode';
import { HttpStatus } from '@/core/enumeration/httpStatusCode';

export interface Response<T> {
  Code: HttpStatus;

  Data: T;

  Message: string;

  ErrorCode: ErrorCode;

  TotalData: number;
}