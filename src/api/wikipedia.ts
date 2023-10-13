import { Router } from "express";
import { getSummary } from "../controllers/wikipedia";

const router = Router();

router.get("/wikipedia", getSummary);

export default router;
