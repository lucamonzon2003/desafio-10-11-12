import 'dotenv/config'
import { ProductCreateDTO } from '../dto/product.dto.js'
import dbService from '../containers/C-mongodb.js'

class ProductService {
    constructor(){
        this.dao = new dbService();
    }
    async getAll(){
        const products = await this.dao.getAll()
        return await products;
    }
    async getById(id){
        try {
            const product = await this.dao.getById(id)
            return product;
        } catch(err) {
            if (err.message === "Item not found") {
                throw new Error(`Product not found with id: ${id}`)
            }
            throw err;
        }
        
    }
    async create(obj){
        const productDto = new ProductCreateDTO(obj);
        const newProduct = await this.dao.create(productDto);
        return newProduct;
        
    }
    async remove(id){
        await this.dao.remove(id);
    }
    async update(obj, id){
        try {
            const product = await this.dao.update(obj, id)
            return product;
        } catch(err) {
            if (err.message === "Item not found") {
                throw new Error(`Product not found with id: ${id}`)
            }
            throw err;
        }
    }
}

export default new ProductService();