import { Request, Response, NextFunction, RequestHandler } from "express";

type AsyncFn<Req extends Request = Request> = (
  req: Req,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

/**
 * Wraps an async controller so any thrown error / rejected promise
 * is forwarded to next(err) instead of crashing the process.
 * Generic over Req so controllers can use typed Request<Params, ...> signatures.
 */
const asyncHandler = <Req extends Request = Request>(
  fn: AsyncFn<Req>,
): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fn(req as Req, res, next)).catch(next);
  };
};

export default asyncHandler;
