import { Router } from 'express';
import { indexWelcome } from '../controllers';

const router = Router();

router.get('/', indexWelcome);

export default router;
