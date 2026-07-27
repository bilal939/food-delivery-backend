import { ErrorCode, ErrorType } from "../enums";
export interface ErrorResponse {
  status: "error";
  statusCode: number;
  code: ErrorCode;
  type: ErrorType;
  message: string;
  timestamp: string;
  requestId?: string;
  errors?: Record<string, unknown>[];
  stack?: string;
}
