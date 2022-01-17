import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/idGenerator"

console.log("Hello from TS!")

const id = new IdGenerator().generate()
const hash = new HashManager().createHash('alice123')
const compare = new HashManager().compareHash('alice1233', hash)

console.log(id, hash, compare)