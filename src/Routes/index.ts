import { Router } from "express";
import { routes } from "./routes";

const apiRoutes = Router();
apiRoutes.use([routes])

export { apiRoutes };