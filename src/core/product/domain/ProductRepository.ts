import { ProductEntity } from "./ProductEntity";

export interface ProductRepository {
    getAll: () => Promise<ProductEntity[]>;
    getById: (id: string) => Promise<ProductEntity>;
    save: (product: ProductEntity) => Promise<void>;
    update: (product: ProductEntity) => Promise<void>;
    delete: (id: string) => Promise<void>;
}
