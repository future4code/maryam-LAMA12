export type Product = {
    id: string,
    name: string,
    tag: []
}

export class Products {
    constructor(
        private id: string,
        private name: string,
        private tag: []
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getTag(){
        return this.tag
    }


    static toProductModel(data: any | string){
        return (data.id, data.name, data.tag)
    }
}
