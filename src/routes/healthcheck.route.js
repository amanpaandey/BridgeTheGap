import { healthCheck } from "../controllers/health.controller.js";

import { Router } from "express";

const router = Router();

router.route("/health").get(healthCheck);

export default router;