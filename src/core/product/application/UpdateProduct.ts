import { ProductEntity } from "../domain";
import { ProductRepository } from "../domain";

export class UpdateProduct {
    constructor(private repository: ProductRepository) {}

    public async updateAll(product: ProductEntity): Promise<void> {
        await this.repository.update(product);
    }
}
