import { BaseApiClient } from './baseApiClient';

export class ProductsApi extends BaseApiClient {
  async getAllProducts() {
    return this.get('/products');
  }

  async getProductById(id: number) {
    return this.get(`/products/${id}`);
  }

  async createProduct(product: any) {
    return this.post('/products', product);
  }

  async updateProduct(id: number, product: any) {
    return this.put(`/products/${id}`, product);
  }

  async deleteProduct(id: number) {
    return this.delete(`/products/${id}`);
  }
}
