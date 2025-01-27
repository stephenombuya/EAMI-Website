import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';
import { router as mineralRoutes } from './routes/minerals.js';
import { router as logisticsRoutes } from './routes/logistics.js';
import { router as marketRoutes } from './routes/market.js';
import { router as governanceRoutes } from './routes/governance.js';

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Logging middleware
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/api/minerals', mineralRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/governance', governanceRoutes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
