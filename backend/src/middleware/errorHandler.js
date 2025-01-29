import { logger } from '../utils/logger.js';
import { ApiError } from '../utils/errors.js';

export const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        code: err.code
      }
    });
  }

  return res.status(500).json({
    error: {
      message: 'Internal server error',
      code: 'INTERNAL_ERROR'
    }
  });
};
