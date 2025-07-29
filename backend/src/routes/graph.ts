import { Router } from 'express';
import { getGraph } from '../controllers/graphController';

const router = Router();

// クエリ例: GET /api/graph?threshold=0.1
router.get('/graph', getGraph);

export default router;
