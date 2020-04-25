import express from 'express';
import builds from './builds';
import settings from './settings';

const router = express.Router();

router.use('/builds', builds);
router.use('/settings', settings);

export default router;
