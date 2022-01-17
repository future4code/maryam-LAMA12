import * as bcryptjs from 'bcryptjs'

export class HashManager{

    createHash = (plainText: string) => {
        const salt = bcryptjs.genSaltSync(Number(process.env.BCRYPT_COST))
        const cypherText = bcryptjs.hashSync(plainText, salt)
        return cypherText
    }

    compareHash = (
        plainText: string,
        cypherText: string 
        ) => {
            return bcryptjs.compareSync(plainText, cypherText)
        }
}