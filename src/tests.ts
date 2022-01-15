import { IdGenerator } from "./services/idGenerator"

console.log("Hello from TS!")

const id = new IdGenerator().generate()

console.log(id)