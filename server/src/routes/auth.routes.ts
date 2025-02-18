import { validateToken } from "../middleware/apiAuth.middleware";
import { Router } from "express";
import { loginController } from "../controller/auth.controller";
import { UserController } from "../controller/user.controller";
import { validateRole } from "../middleware/checkRole.middleware";
import { Request, Response } from "express";
import user from "../database/schema/user.schema";
const userRouter: Router = Router();

userRouter.post("/login", loginController.login);
userRouter.get("/profile", validateToken, validateRole, UserController.getUser);

export default userRouter;
