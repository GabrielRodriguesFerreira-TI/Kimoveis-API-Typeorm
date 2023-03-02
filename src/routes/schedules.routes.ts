import { Router } from "express";
import { tokenValidationMiddleware } from "../middlewares/validToken.middlwares";
import { validBodyMiddleware } from "../middlewares/validBody.middleware";
import { createSchedulesSchema } from "../schemas/schedules.schema";
import {
  createSchedulesControllers,
  retrieveSchedulesControllers,
} from "../controllers/schedules/schedules.controllers";
import { adminValidMiddleware } from "../middlewares/validAdmin.middlewares";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "/schedules",
  tokenValidationMiddleware,
  validBodyMiddleware(createSchedulesSchema),
  createSchedulesControllers
);

schedulesRoutes.get(
  "/schedules/realEstate/:id",
  tokenValidationMiddleware,
  adminValidMiddleware,
  retrieveSchedulesControllers
);
