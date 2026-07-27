import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
interface MongooseLikeValidationError extends Error {
  name: "ValidationError";
  errors: Record<string, { message: string }>;
}

interface JwtLikeError extends Error {
  name: "JsonWebTokenError" | "TokenExpiredError";
}

function isMongooseValidationError(
  err: unknown,
): err is MongooseLikeValidationError {
  return (
    err instanceof Error && err.name === "ValidationError" && "errors" in err
  );
}

function isJwtError(err: unknown): err is JwtLikeError {
  return (
    err instanceof Error &&
    (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError")
  );
}

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
    return;
  }

  if (isMongooseValidationError(err)) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      details: Object.values(err.errors).map((e) => e.message),
    });
    return;
  }

  if (isJwtError(err)) {
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
    return;
  }

  const isProd = process.env.NODE_ENV === "production";
  const message = err instanceof Error ? err.message : "Unknown error";
  const stack = err instanceof Error ? err.stack : undefined;

  res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(isProd ? {} : { error: message, stack }),
  });
}

export function notFoundHandler(req: Request, res: Response): void {
  res
    .status(404)
    .json({ success: false, message: `Route ${req.originalUrl} not found` });
}
