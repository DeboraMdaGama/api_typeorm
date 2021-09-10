import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import {Length, IsInt} from "class-validator";
import { User } from "./User";

  
@Entity("product")
class Product {
    @PrimaryColumn()
    readonly id: string;
  
    @Column()
    name: string;

    @Column()
    @Length(10, 20)
    description: string;
  
    @Column()
    user_id:string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    userId: User;
    
    @Column()
    price: number;
  
    @Column()
    @IsInt()
    quantity: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
}

export {Product};