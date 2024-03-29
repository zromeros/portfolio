import { ProductEntity } from "../domain";
import { ProductRepository } from "../domain";

export class CreateProduct {
    constructor(private repository: ProductRepository) {}

    public async create(product: ProductEntity): Promise<void> {
        await this.repository.save(product);
    }
}
