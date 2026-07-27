export interface ApiResponse<T = unknown> {
  status: "success";
  statusCode: number;
  data: T;
  message?: string;
  timestamp: string;
}
