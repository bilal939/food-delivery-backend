import { Request, Response } from "express";
import { ApiResponse } from "./interfaces";
const getBaseResponse = (req: Request) => ({
  timestamp: new Date().toISOString(),
});

export const ok = <T = unknown>(
  req: Request,
  res: Response,
  data: T,
  message?: string,
): Response => {
  const response: ApiResponse<T> = {
    status: "success",
    statusCode: 200,
    data,
    ...(message && { message }),
    ...getBaseResponse(req),
  };
  return res.status(200).json(response);
};
