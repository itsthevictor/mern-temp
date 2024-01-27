import {
  getAllJobs,
  getSingleJob,
  editJob,
  deleteJob,
  createJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

import { Router } from "express";
const router = Router();

router
  .get("/", getAllJobs)
  .post("/", checkForTestUser, validateJobInput, createJob)
  .get("/stats", showStats)
  .get("/:id", getSingleJob)
  .patch("/:id", checkForTestUser, validateParam, validateJobInput, editJob)
  .delete("/:id", checkForTestUser, validateParam, deleteJob);

export default router;
