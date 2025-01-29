import { db } from '../db/index.js';
import { logger } from '../utils/logger.js';
import { ApiError } from '../utils/errors.js';

export const getAllMinerals = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM minerals ORDER BY name'
    );
    res.json(rows);
  } catch (error) {
    next(new ApiError('Failed to fetch minerals', 500));
  }
};

export const getMineralById = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM minerals WHERE id = $1',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      throw new ApiError('Mineral not found', 404);
    }
    
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const getMineralsByCategory = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM minerals WHERE category = $1',
      [req.params.category]
    );
    res.json(rows);
  } catch (error) {
    next(new ApiError('Failed to fetch minerals by category', 500));
  }
};

export const getMineralLocations = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM mineral_locations WHERE mineral_id = $1',
      [req.params.id]
    );
    res.json(rows);
  } catch (error) {
    next(new ApiError('Failed to fetch mineral locations', 500));
  }
};

export const createMineral = async (req, res, next) => {
  try {
    const { name, description, category, image } = req.body;
    const { rows } = await db.query(
      'INSERT INTO minerals (name, description, category, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, category, image]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    next(new ApiError('Failed to create mineral', 500));
  }
};

export const updateMineral = async (req, res, next) => {
  try {
    const { name, description, category, image } = req.body;
    const { rows } = await db.query(
      'UPDATE minerals SET name = $1, description = $2, category = $3, image = $4 WHERE id = $5 RETURNING *',
      [name, description, category, image, req.params.id]
    );
    
    if (rows.length === 0) {
      throw new ApiError('Mineral not found', 404);
    }
    
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteMineral = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'DELETE FROM minerals WHERE id = $1 RETURNING *',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      throw new ApiError('Mineral not found', 404);
    }
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
