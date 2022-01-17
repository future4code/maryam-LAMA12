import { Request, Response } from "express";
import { ProductDatabase } from "../../data/ProductDatabase";

export async function getAllProducts(
    req: Request,
    res: Response
) : Promise<void>{
    try {
        const products = new ProductDatabase().getAllProducts()
        res.status(200).send(products)
    } catch (error) {
        res.status(500).end()
    }
}