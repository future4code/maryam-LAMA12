import { ProductDatabase } from "./data/ProductDatabase";
import { IdGenerator } from "./services/IdGenerator";

const id = new IdGenerator().generate()
const products = new ProductDatabase().getAllProducts()

console.log(products)