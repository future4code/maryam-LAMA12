import { app } from "./controller/app";
import { getAllProducts } from "./controller/endpoints/getAll";

app.get('/', getAllProducts)