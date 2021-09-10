import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateProductController } from "./controllers/CreateProductController"
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createProductController = new CreateProductController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/products", createProductController.handle);

export { router };