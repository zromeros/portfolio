import { ProductRepository } from "../domain";

export class DeleteProduct {
    constructor(private repository: ProductRepository) {}

    public async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
