import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price, quantity , user_id} = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({ name, description, price, quantity ,user_id});

    return response.json(product);
  }
}

export { CreateProductController };