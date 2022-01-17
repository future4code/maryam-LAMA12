import { Product, Products } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public async getAllProducts() : Promise<Product[]> {
        const products = await BaseDatabase.connection("amaro_products")
        .select(
            'id',
            'name',
            'tag'
        )
        return Products.toProductModel(products)
    }
}

