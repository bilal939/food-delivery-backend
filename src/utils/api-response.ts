import { Request, Response } from "express";
import { ApiResponse } from "../utils/interfaces";

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

export const created = <T = unknown>(
  req: Request,
  res: Response,
  data: T,
  message: string = "Resource created successfully",
): Response => {
  const response: ApiResponse<T> = {
    status: "success",
    statusCode: 201,
    data,
    message,
    ...getBaseResponse(req),
  };
  return res.status(201).json(response);
};

export const noContent = (req: Request, res: Response): Response => {
  return res.status(204).send();
};
