import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../repositories/ProductRepositories";
import {validate,} from "class-validator";

interface IProductRequest {
  name: string
  description: string;
  user_id:string;
  price:number;
  quantity:number;
}

class CreateProductService {
  async execute({ name, description, price,quantity,user_id }: IProductRequest) {
    const productRepository = getCustomRepository(ProductRepositories);

    const product = productRepository.create({
      name,
      description,
      price,
      quantity,
      user_id
    });

    const errors = await validate(product);
    if (errors.length > 0) {
        console.log(errors);
        throw new Error(`Validation failed!`); 
    } else {
        await productRepository.save(product);
    }
    

    return product;
  }
}

export { CreateProductService };