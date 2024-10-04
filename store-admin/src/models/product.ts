import { Column, Entity } from "typeorm";
import {
  Product as MedusaProduct,
} from "@medusajs/medusa";

@Entity()
export class Product extends MedusaProduct {
  @Column()
  wine_collection: string;

  @Column()
  grape_variety: string;

  @Column()
  vintage: string;

  @Column()
  region: string;

  @Column()
  alcohol_content: number;

  @Column()
  tasting_notes: string;
  
  @Column()
  serving_temperature: string;
}
