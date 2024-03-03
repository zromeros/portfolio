import { ProductEntity } from "../domain";
import { ProductRepository } from "../domain";

export class ListProducts {
    constructor(private repository: ProductRepository) {}

    public async getAll(product: ProductEntity): Promise<void> {
        await this.repository.getAll();
    }

    public async getById(id: string): Promise<void> {
        await this.repository.getById(id);
    }
}
