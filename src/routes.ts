import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateProductController } from "./controllers/CreateProductController"
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { getRepository } from "typeorm";
import { Product } from "./entities/Product";
import { Request, Response } from "express";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createProductController = new CreateProductController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/products", createProductController.handle);


router.get("/products", async (request: Request, response: Response) =>{
    response.json(await getRepository(Product).find());
});

export { router };