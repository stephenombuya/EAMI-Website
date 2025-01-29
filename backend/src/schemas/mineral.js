import Joi from 'joi';

export const mineralSchemas = {
  createMineral: Joi.object({
    name: Joi.string().required().min(2).max(100),
    description: Joi.string().required().min(10).max(1000),
    category: Joi.string().required().valid(
      'Precious Metals',
      'Industrial Minerals',
      'Gemstones',
      'Energy Minerals',
      'Construction Minerals',
      'Strategic Minerals'
    ),
    image: Joi.string().uri().required(),
    locations: Joi.array().items(Joi.string()).min(1).required(),
    uses: Joi.array().items(Joi.string()).min(1).required(),
    production: Joi.object({
      amount: Joi.string().required(),
      year: Joi.number().integer().min(1900).max(new Date().getFullYear()).required()
    }).required()
  }),

  updateMineral: Joi.object({
    name: Joi.string().min(2).max(100),
    description: Joi.string().min(10).max(1000),
    category: Joi.string().valid(
      'Precious Metals',
      'Industrial Minerals',
      'Gemstones',
      'Energy Minerals',
      'Construction Minerals',
      'Strategic Minerals'
    ),
    image: Joi.string().uri(),
    locations: Joi.array().items(Joi.string()).min(1),
    uses: Joi.array().items(Joi.string()).min(1),
    production: Joi.object({
      amount: Joi.string(),
      year: Joi.number().integer().min(1900).max(new Date().getFullYear())
    })
  })
};
